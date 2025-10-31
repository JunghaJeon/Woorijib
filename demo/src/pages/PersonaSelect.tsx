import { useNavigate } from 'react-router-dom';
import { allPersonas } from '../data/personas';

export default function PersonaSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-br from-indigo-50 to-purple-50 p-5 fade-in">
      {/* Header */}
      <div className="pt-6 pb-4 text-center">
        <button
          onClick={() => navigate('/')}
          className="absolute top-5 left-5 text-2xl"
        >
          ←
        </button>

        <h1 className="text-xl font-bold text-gray-800">
          💭 어떤 가족의 이야기가 궁금하세요?
        </h1>
      </div>

      {/* Persona Cards - Compact Grid */}
      <div className="space-y-3 mb-5">
        {allPersonas.map((persona) => (
          <button
            key={persona.id}
            onClick={() => navigate(`/demo/${persona.id}`)}
            className={`w-full bg-gradient-to-r ${persona.gradient} p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] text-left`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{persona.emoji}</span>
              <h3 className="text-lg font-bold text-gray-800">
                {persona.title}
              </h3>
            </div>
            <p className="text-xs text-gray-700 mb-2 leading-relaxed">
              {persona.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {persona.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/60 px-2 py-0.5 rounded-full"
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
