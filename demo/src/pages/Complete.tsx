import { useParams, useNavigate } from 'react-router-dom';
import { allPersonas } from '../data/personas';

export default function Complete() {
  const { personaId } = useParams<{ personaId: string }>();
  const navigate = useNavigate();
  const persona = allPersonas.find((p) => p.id === personaId);

  if (!persona) {
    navigate('/select');
    return null;
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-purple-50 to-pink-50 p-6 fade-in">
      <div className="pt-8 pb-6 text-center">
        <div className="text-6xl mb-4">✨</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">체험 완료!</h1>
        <p className="text-gray-600">
          {persona.title}을 체험해주셔서 감사합니다
        </p>
      </div>

      {/* 체험한 내용 */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">지금까지 본 내용:</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>{persona.title}의 하루</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>{persona.members.length}명의 가족 구성원별 맞춤 UI</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>세대 간 이해의 순간</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>파몽이와 함께하는 재미</span>
          </div>
        </div>
      </div>

      {/* 실제 기능 */}
      <div className="bg-purple-50 rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-purple-900 mb-3">💡 실제로는 이런 기능도!</h3>
        <ul className="space-y-2 text-sm text-purple-800">
          <li>• AI가 우리 가족만을 위한 질문 추천</li>
          <li>• 음성/사진/동영상으로 다양한 답변</li>
          <li>• 가족 추억 타임라인 자동 생성</li>
          <li>• 세대 간 이해 교육 콘텐츠</li>
        </ul>
      </div>

      {/* 혜택 */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mb-6 border-2 border-purple-300">
        <div className="text-center mb-4">
          <div className="text-2xl mb-2">🎁</div>
          <h3 className="font-bold text-gray-800 text-lg">지금 가입하면</h3>
          <p className="text-purple-700 text-xl font-bold">프리미엄 7일 무료!</p>
        </div>
        <div className="text-xs text-gray-600 text-center">
          ✨ 1000개 엄선된 질문 전체 이용
          <br />
          🎨 파몽이 스페셜 스킨 증정
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 mb-6">
        <button
          onClick={() => alert('가입 기능은 준비 중입니다!\n\n실제 앱이 출시되면 알려드릴게요 😊')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          💝 우리 가족 시작하기
        </button>

        <button
          onClick={() => navigate('/select')}
          className="w-full bg-white text-purple-600 font-semibold py-4 rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all"
        >
          다른 가족도 체험하기
        </button>
      </div>

      {/* 앱 스토어 준비 중 */}
      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-600 mb-2">📱 앱 스토어 준비 중</p>
        <p className="text-xs text-gray-500">
          사전 신청하고 출시 알림 받기!
          <br />
          <a href="mailto:contact@woorijib.app" className="text-purple-600 underline">
            contact@woorijib.app
          </a>
        </p>
      </div>

      {/* 만족도 평가 */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-2">💬 체험이 마음에 드셨나요?</p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => alert(`${star}점 평가 감사합니다! ⭐`)}
              className="text-2xl hover:scale-110 transition-transform"
            >
              ⭐
            </button>
          ))}
        </div>
      </div>

      {/* 홈으로 */}
      <button
        onClick={() => navigate('/')}
        className="w-full mt-8 text-gray-500 text-sm py-3 hover:text-gray-700 transition-colors"
      >
        처음으로 돌아가기
      </button>
    </div>
  );
}
