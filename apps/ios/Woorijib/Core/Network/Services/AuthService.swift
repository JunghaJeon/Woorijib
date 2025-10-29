import Foundation
import Combine

protocol AuthServiceProtocol {
    var isAuthenticated: Bool { get }
    var authStatePublisher: AnyPublisher<Bool, Never> { get }

    func signIn(email: String, password: String) async throws -> User
    func signUp(email: String, password: String, name: String) async throws -> User
    func signOut()
    func getCurrentUser() async throws -> User
    func refreshToken() async throws
}

class AuthService: AuthServiceProtocol {
    static let shared = AuthService()

    private let apiClient = APIClient.shared
    private let tokenManager = TokenManager.shared
    private let authStateSubject = CurrentValueSubject<Bool, Never>(false)

    var isAuthenticated: Bool {
        tokenManager.hasValidToken
    }

    var authStatePublisher: AnyPublisher<Bool, Never> {
        authStateSubject.eraseToAnyPublisher()
    }

    private init() {
        authStateSubject.send(isAuthenticated)
    }

    func signIn(email: String, password: String) async throws -> User {
        struct SignInRequest: Encodable {
            let email: String
            let password: String
        }

        struct SignInResponse: Decodable {
            let user: User
            let accessToken: String
            let refreshToken: String

            enum CodingKeys: String, CodingKey {
                case user
                case accessToken = "access_token"
                case refreshToken = "refresh_token"
            }
        }

        let request = SignInRequest(email: email, password: password)
        let response: SignInResponse = try await apiClient.post("/auth/signin", body: request)

        tokenManager.saveTokens(
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
        )

        authStateSubject.send(true)

        return response.user
    }

    func signUp(email: String, password: String, name: String) async throws -> User {
        struct SignUpRequest: Encodable {
            let email: String
            let password: String
            let name: String
        }

        struct SignUpResponse: Decodable {
            let user: User
            let accessToken: String
            let refreshToken: String

            enum CodingKeys: String, CodingKey {
                case user
                case accessToken = "access_token"
                case refreshToken = "refresh_token"
            }
        }

        let request = SignUpRequest(email: email, password: password, name: name)
        let response: SignUpResponse = try await apiClient.post("/auth/signup", body: request)

        tokenManager.saveTokens(
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
        )

        authStateSubject.send(true)

        return response.user
    }

    func signOut() {
        tokenManager.clearTokens()
        authStateSubject.send(false)
    }

    func getCurrentUser() async throws -> User {
        try await apiClient.get("/auth/me")
    }

    func refreshToken() async throws {
        guard let refreshToken = tokenManager.refreshToken else {
            throw AuthError.noRefreshToken
        }

        struct RefreshRequest: Encodable {
            let refreshToken: String

            enum CodingKeys: String, CodingKey {
                case refreshToken = "refresh_token"
            }
        }

        struct RefreshResponse: Decodable {
            let accessToken: String
            let refreshToken: String

            enum CodingKeys: String, CodingKey {
                case accessToken = "access_token"
                case refreshToken = "refresh_token"
            }
        }

        let request = RefreshRequest(refreshToken: refreshToken)
        let response: RefreshResponse = try await apiClient.post("/auth/refresh", body: request)

        tokenManager.saveTokens(
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
        )
    }
}

enum AuthError: LocalizedError {
    case noRefreshToken
    case invalidCredentials

    var errorDescription: String? {
        switch self {
        case .noRefreshToken:
            return "인증 토큰이 없습니다."
        case .invalidCredentials:
            return "이메일 또는 비밀번호가 올바르지 않습니다."
        }
    }
}
