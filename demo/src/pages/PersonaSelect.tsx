import { useNavigate } from 'react-router-dom';
import { allPersonas } from '../data/personas';

export default function PersonaSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-br from-indigo-50 to-purple-50 p-6 fade-in">
      {/* Header */}
      <div className="pt-8 pb-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 text-2xl"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          💭 어떤 가족의 이야기가
          <br />
          궁금하세요?
        </h1>
        <p className="text-sm text-gray-600">
          우리 가족과 비슷한 유형을 선택해보세요
        </p>
      </div>

      {/* Persona Cards */}
      <div className="space-y-4 mb-6">
        {allPersonas.map((persona) => (
          <button
            key={persona.id}
            onClick={() => navigate(`/demo/${persona.id}`)}
            className={`w-full bg-gradient-to-r ${persona.gradient} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-left`}
          >
            <div className="flex items-center mb-3">
              <span className="text-4xl mr-4">{persona.emoji}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {persona.title}
                </h3>
                <p className="text-sm text-gray-600">{persona.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {persona.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {persona.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/50 px-3 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Skip Button */}
      <button
        onClick={() => alert('가입 기능은 준비 중입니다!')}
        className="w-full text-purple-600 font-medium py-3 hover:text-purple-800 transition-colors"
      >
        건너뛰고 시작하기 &gt;
      </button>
    </div>
  );
}
