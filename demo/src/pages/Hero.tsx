import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 text-center fade-in">
      {/* 우리 캐릭터 - 미니멀 집 */}
      <div className="mb-8">
        <div className="text-9xl mb-4 bounce-slow">
          🏡
        </div>
      </div>

      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          우리집
        </h1>
        <p className="text-base text-gray-700 leading-relaxed">
          서로가 몰랐던
          <br />
          우리 가족 마음 다이어리
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => navigate('/select')}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 mb-4"
      >
        ✨ 체험하기
      </button>

      {/* Secondary Actions */}
      <div className="flex gap-4 text-sm">
        <button className="text-purple-600 hover:text-purple-800 transition-colors">
          회원가입
        </button>
        <span className="text-gray-400">|</span>
        <button className="text-purple-600 hover:text-purple-800 transition-colors">
          로그인
        </button>
      </div>
    </div>
  );
}
