import SwiftUI
import Combine

/// 앱 전역 상태 관리
class AppState: ObservableObject {
    // MARK: - Published Properties

    /// 인증 상태
    @Published var isAuthenticated: Bool = false

    /// 현재 사용자
    @Published var currentUser: User?

    /// 현재 선택된 가족
    @Published var selectedFamily: Family?

    /// 로딩 상태
    @Published var isLoading: Bool = false

    /// 에러 메시지
    @Published var errorMessage: String?

    /// 온보딩 완료 여부
    @Published var hasCompletedOnboarding: Bool {
        didSet {
            UserDefaults.standard.set(hasCompletedOnboarding, forKey: "hasCompletedOnboarding")
        }
    }

    // MARK: - Private Properties

    private var cancellables = Set<AnyCancellable>()
    private let authService: AuthServiceProtocol
    private let familyService: FamilyServiceProtocol

    // MARK: - Initialization

    init(
        authService: AuthServiceProtocol = AuthService.shared,
        familyService: FamilyServiceProtocol = FamilyService.shared
    ) {
        self.authService = authService
        self.familyService = familyService
        self.hasCompletedOnboarding = UserDefaults.standard.bool(forKey: "hasCompletedOnboarding")

        setupBindings()
    }

    // MARK: - Public Methods

    func initialize() {
        checkAuthenticationStatus()
        loadUserData()
    }

    func signIn(email: String, password: String) async throws {
        isLoading = true
        defer { isLoading = false }

        do {
            let user = try await authService.signIn(email: email, password: password)
            await MainActor.run {
                self.currentUser = user
                self.isAuthenticated = true
            }
            await loadFamilyData()
        } catch {
            await MainActor.run {
                self.errorMessage = error.localizedDescription
            }
            throw error
        }
    }

    func signOut() {
        authService.signOut()
        currentUser = nil
        selectedFamily = nil
        isAuthenticated = false
    }

    // MARK: - Private Methods

    private func setupBindings() {
        // Auth state 변경 감지
        authService.authStatePublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] isAuthenticated in
                self?.isAuthenticated = isAuthenticated
            }
            .store(in: &cancellables)
    }

    private func checkAuthenticationStatus() {
        isAuthenticated = authService.isAuthenticated
    }

    private func loadUserData() {
        guard isAuthenticated else { return }

        Task {
            do {
                let user = try await authService.getCurrentUser()
                await MainActor.run {
                    self.currentUser = user
                }
                await loadFamilyData()
            } catch {
                print("Failed to load user data: \(error)")
            }
        }
    }

    private func loadFamilyData() async {
        guard let userId = currentUser?.id else { return }

        do {
            let families = try await familyService.getFamilies(for: userId)
            await MainActor.run {
                if let firstFamily = families.first {
                    self.selectedFamily = firstFamily
                }
            }
        } catch {
            print("Failed to load family data: \(error)")
        }
    }
}
