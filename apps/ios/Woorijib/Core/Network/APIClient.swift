import Foundation
import Combine

/// API 클라이언트
class APIClient {
    static let shared = APIClient()

    private let baseURL: URL
    private let session: URLSession
    private let decoder: JSONDecoder
    private let encoder: JSONEncoder

    private init() {
        #if DEBUG
        self.baseURL = URL(string: "http://localhost:3000/api/v1")!
        #else
        self.baseURL = URL(string: "https://api.woorijib.com/api/v1")!
        #endif

        let configuration = URLSessionConfiguration.default
        configuration.timeoutIntervalForRequest = 30
        configuration.timeoutIntervalForResource = 300
        self.session = URLSession(configuration: configuration)

        self.decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601

        self.encoder = JSONEncoder()
        encoder.dateEncodingStrategy = .iso8601
    }

    /// GET 요청
    func get<T: Decodable>(
        _ endpoint: String,
        parameters: [String: String]? = nil
    ) async throws -> T {
        let request = try createRequest(
            endpoint: endpoint,
            method: "GET",
            parameters: parameters
        )
        return try await performRequest(request)
    }

    /// POST 요청
    func post<T: Decodable, B: Encodable>(
        _ endpoint: String,
        body: B
    ) async throws -> T {
        var request = try createRequest(endpoint: endpoint, method: "POST")
        request.httpBody = try encoder.encode(body)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        return try await performRequest(request)
    }

    /// PUT 요청
    func put<T: Decodable, B: Encodable>(
        _ endpoint: String,
        body: B
    ) async throws -> T {
        var request = try createRequest(endpoint: endpoint, method: "PUT")
        request.httpBody = try encoder.encode(body)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        return try await performRequest(request)
    }

    /// DELETE 요청
    func delete<T: Decodable>(
        _ endpoint: String
    ) async throws -> T {
        let request = try createRequest(endpoint: endpoint, method: "DELETE")
        return try await performRequest(request)
    }

    /// 파일 업로드
    func upload(
        _ endpoint: String,
        data: Data,
        fileName: String,
        mimeType: String
    ) async throws -> UploadResponse {
        var request = try createRequest(endpoint: endpoint, method: "POST")

        let boundary = UUID().uuidString
        request.setValue(
            "multipart/form-data; boundary=\(boundary)",
            forHTTPHeaderField: "Content-Type"
        )

        var body = Data()
        body.append("--\(boundary)\r\n".data(using: .utf8)!)
        body.append("Content-Disposition: form-data; name=\"file\"; filename=\"\(fileName)\"\r\n".data(using: .utf8)!)
        body.append("Content-Type: \(mimeType)\r\n\r\n".data(using: .utf8)!)
        body.append(data)
        body.append("\r\n--\(boundary)--\r\n".data(using: .utf8)!)

        request.httpBody = body

        return try await performRequest(request)
    }

    // MARK: - Private Methods

    private func createRequest(
        endpoint: String,
        method: String,
        parameters: [String: String]? = nil
    ) throws -> URLRequest {
        var url = baseURL.appendingPathComponent(endpoint)

        if let parameters = parameters {
            var components = URLComponents(url: url, resolvingAgainstBaseURL: false)
            components?.queryItems = parameters.map {
                URLQueryItem(name: $0.key, value: $0.value)
            }
            guard let urlWithParams = components?.url else {
                throw APIError.invalidURL
            }
            url = urlWithParams
        }

        var request = URLRequest(url: url)
        request.httpMethod = method

        // 인증 토큰 추가
        if let token = TokenManager.shared.accessToken {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        request.setValue("application/json", forHTTPHeaderField: "Accept")

        return request
    }

    private func performRequest<T: Decodable>(_ request: URLRequest) async throws -> T {
        let (data, response) = try await session.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse else {
            throw APIError.invalidResponse
        }

        guard (200...299).contains(httpResponse.statusCode) else {
            throw APIError.httpError(statusCode: httpResponse.statusCode)
        }

        do {
            return try decoder.decode(T.self, from: data)
        } catch {
            throw APIError.decodingError(error)
        }
    }
}

// MARK: - API Error
enum APIError: LocalizedError {
    case invalidURL
    case invalidResponse
    case httpError(statusCode: Int)
    case decodingError(Error)
    case networkError(Error)

    var errorDescription: String? {
        switch self {
        case .invalidURL:
            return "잘못된 URL입니다."
        case .invalidResponse:
            return "서버 응답이 올바르지 않습니다."
        case .httpError(let statusCode):
            return "서버 오류 (코드: \(statusCode))"
        case .decodingError:
            return "데이터 파싱에 실패했습니다."
        case .networkError(let error):
            return "네트워크 오류: \(error.localizedDescription)"
        }
    }
}

// MARK: - Response Models
struct UploadResponse: Decodable {
    let url: URL
    let fileName: String

    enum CodingKeys: String, CodingKey {
        case url
        case fileName = "file_name"
    }
}
