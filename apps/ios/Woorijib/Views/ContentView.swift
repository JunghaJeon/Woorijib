import SwiftUI

struct ContentView: View {
    @EnvironmentObject var appState: AppState

    var body: some View {
        Group {
            if !appState.hasCompletedOnboarding {
                OnboardingView()
            } else if appState.isAuthenticated {
                MainTabView()
            } else {
                AuthenticationView()
            }
        }
        .overlay {
            if appState.isLoading {
                LoadingView()
            }
        }
        .alert("오류", isPresented: .constant(appState.errorMessage != nil)) {
            Button("확인") {
                appState.errorMessage = nil
            }
        } message: {
            if let error = appState.errorMessage {
                Text(error)
            }
        }
    }
}

// MARK: - Main Tab View
struct MainTabView: View {
    @State private var selectedTab: Tab = .home

    enum Tab {
        case home
        case questions
        case pet
        case album
        case profile
    }

    var body: some View {
        TabView(selection: $selectedTab) {
            HomeView()
                .tabItem {
                    Label("홈", systemImage: "house.fill")
                }
                .tag(Tab.home)

            QuestionsView()
                .tabItem {
                    Label("질문", systemImage: "bubble.left.and.bubble.right.fill")
                }
                .tag(Tab.questions)

            PetView()
                .tabItem {
                    Label("우리펫", systemImage: "pawprint.fill")
                }
                .tag(Tab.pet)

            AlbumView()
                .tabItem {
                    Label("앨범", systemImage: "photo.fill")
                }
                .tag(Tab.album)

            ProfileView()
                .tabItem {
                    Label("프로필", systemImage: "person.fill")
                }
                .tag(Tab.profile)
        }
        .accentColor(Color("Primary"))
    }
}

// MARK: - Preview
#Preview {
    ContentView()
        .environmentObject(AppState())
}
