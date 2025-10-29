import Foundation

/// 사용자 모델
struct User: Identifiable, Codable {
    let id: String
    let email: String
    let name: String
    let birthDate: Date?
    let profileImageURL: URL?
    let phoneNumber: String?
    let createdAt: Date
    let updatedAt: Date

    enum CodingKeys: String, CodingKey {
        case id
        case email
        case name
        case birthDate = "birth_date"
        case profileImageURL = "profile_image_url"
        case phoneNumber = "phone_number"
        case createdAt = "created_at"
        case updatedAt = "updated_at"
    }
}

/// 가족 구성원 역할
enum FamilyRole: String, Codable, CaseIterable {
    case parent = "parent"
    case child = "child"
    case grandparent = "grandparent"
    case other = "other"

    var displayName: String {
        switch self {
        case .parent: return "부모"
        case .child: return "자녀"
        case .grandparent: return "조부모"
        case .other: return "기타"
        }
    }
}
