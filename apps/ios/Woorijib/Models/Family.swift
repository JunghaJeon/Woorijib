import Foundation

/// 가족 모델
struct Family: Identifiable, Codable {
    let id: String
    let name: String
    let createdBy: String
    let petId: String?
    let subscriptionTier: SubscriptionTier
    let members: [FamilyMember]
    let createdAt: Date

    enum CodingKeys: String, CodingKey {
        case id
        case name
        case createdBy = "created_by"
        case petId = "pet_id"
        case subscriptionTier = "subscription_tier"
        case members
        case createdAt = "created_at"
    }
}

/// 가족 구성원
struct FamilyMember: Identifiable, Codable {
    let id: String
    let userId: String
    let familyId: String
    let role: FamilyRole
    let nickname: String?
    let joinedAt: Date

    enum CodingKeys: String, CodingKey {
        case id
        case userId = "user_id"
        case familyId = "family_id"
        case role
        case nickname
        case joinedAt = "joined_at"
    }
}

/// 구독 등급
enum SubscriptionTier: String, Codable {
    case free = "free"
    case premium = "premium"
    case premiumPlus = "premium_plus"

    var displayName: String {
        switch self {
        case .free: return "무료"
        case .premium: return "프리미엄"
        case .premiumPlus: return "프리미엄 플러스"
        }
    }

    var price: Int {
        switch self {
        case .free: return 0
        case .premium: return 9900
        case .premiumPlus: return 19900
        }
    }
}
