import Foundation
import Security

/// 토큰 관리자 (Keychain 사용)
class TokenManager {
    static let shared = TokenManager()

    private let accessTokenKey = "com.woorijib.accessToken"
    private let refreshTokenKey = "com.woorijib.refreshToken"

    private init() {}

    var accessToken: String? {
        get { getToken(for: accessTokenKey) }
        set {
            if let token = newValue {
                saveToken(token, for: accessTokenKey)
            } else {
                deleteToken(for: accessTokenKey)
            }
        }
    }

    var refreshToken: String? {
        get { getToken(for: refreshTokenKey) }
        set {
            if let token = newValue {
                saveToken(token, for: refreshTokenKey)
            } else {
                deleteToken(for: refreshTokenKey)
            }
        }
    }

    var hasValidToken: Bool {
        accessToken != nil
    }

    func saveTokens(accessToken: String, refreshToken: String) {
        self.accessToken = accessToken
        self.refreshToken = refreshToken
    }

    func clearTokens() {
        accessToken = nil
        refreshToken = nil
    }

    // MARK: - Keychain Operations

    private func saveToken(_ token: String, for key: String) {
        let data = token.data(using: .utf8)!

        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecValueData as String: data,
            kSecAttrAccessible as String: kSecAttrAccessibleAfterFirstUnlock
        ]

        // Delete existing item
        SecItemDelete(query as CFDictionary)

        // Add new item
        let status = SecItemAdd(query as CFDictionary, nil)
        guard status == errSecSuccess else {
            print("Error saving token to keychain: \(status)")
            return
        }
    }

    private func getToken(for key: String) -> String? {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecReturnData as String: true,
            kSecMatchLimit as String: kSecMatchLimitOne
        ]

        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)

        guard status == errSecSuccess,
              let data = result as? Data,
              let token = String(data: data, encoding: .utf8) else {
            return nil
        }

        return token
    }

    private func deleteToken(for key: String) {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key
        ]

        SecItemDelete(query as CFDictionary)
    }
}
