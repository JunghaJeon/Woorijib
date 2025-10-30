import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allPersonas, Persona, FamilyMember } from '../data/personas';

export default function DemoFlow() {
  const { personaId } = useParams<{ personaId: string }>();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [persona, setPersona] = useState<Persona | null>(null);

  useEffect(() => {
    const found = allPersonas.find((p) => p.id === personaId);
    if (found) {
      setPersona(found);
    } else {
      navigate('/select');
    }
  }, [personaId, navigate]);

  if (!persona) return <div>Loading...</div>;

  const renderStep = () => {
    switch (step) {
      case 0:
        return <IntroStep persona={persona} onNext={() => setStep(1)} />;
      case 1:
        return (
          <MemberSelectStep
            persona={persona}
            onSelect={(member) => {
              setSelectedMember(member);
              setStep(2);
            }}
          />
        );
      case 2:
        return selectedMember ? (
          <AnswerViewStep
            persona={persona}
            member={selectedMember}
            onNext={(nextMember) => {
              if (nextMember) {
                setSelectedMember(nextMember);
              } else {
                setStep(3);
              }
            }}
            onBack={() => setStep(1)}
          />
        ) : null;
      case 3:
        return (
          <FamongReactionStep
            persona={persona}
            onComplete={() => navigate(`/complete/${personaId}`)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="min-h-full fade-in">{renderStep()}</div>;
}

// Step 1: Intro
function IntroStep({ persona, onNext }: { persona: Persona; onNext: () => void }) {
  return (
    <div className={`min-h-full bg-gradient-to-br ${persona.gradient} p-8 flex flex-col items-center justify-center text-center`}>
      <div className="mb-6">
        <div className="text-6xl mb-4">{persona.emoji}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{persona.title}</h2>
        <p className="text-gray-700">{persona.description}</p>
      </div>

      <div className="bg-white/80 rounded-2xl p-6 mb-6 w-full max-w-sm">
        <h3 className="font-semibold text-gray-800 mb-3">만나보실 가족:</h3>
        <div className="space-y-2">
          {persona.members.map((member, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-2xl">{member.emoji}</span>
              <span className="text-gray-700">
                {member.role} ({member.name}, {member.age}세)
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-6xl mb-4 bounce">
        <pre className="text-2xl leading-tight">
{`   ╱|、
  (˚ˎ 。7
   |、˜〵
  じしˍ,)ノ`}
        </pre>
      </div>

      <p className="text-gray-700 mb-6">
        안녕하세요! 저는 파몽이에요 🐶
        <br />
        이 가족의 하루를 함께 체험해볼까요?
      </p>

      <button
        onClick={onNext}
        className="bg-white text-purple-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        시작하기
      </button>
    </div>
  );
}

// Step 2: Member Select
function MemberSelectStep({
  persona,
  onSelect,
}: {
  persona: Persona;
  onSelect: (member: FamilyMember) => void;
}) {
  return (
    <div className="min-h-full bg-white p-6">
      <div className="pt-6 pb-4 text-center">
        <p className="text-sm text-gray-500 mb-2">📅 2024년 10월 30일</p>
        <h2 className="text-xl font-bold text-gray-800 mb-1">💭 오늘의 질문</h2>
        <p className="text-lg text-gray-700 mb-4">{persona.sampleQuestion.text}</p>
      </div>

      <div className="bg-purple-50 rounded-2xl p-4 mb-6">
        <p className="text-sm text-gray-700 flex items-start gap-2">
          <span>🐶</span>
          <span>
            <strong>파몽:</strong> 각 가족이 어떻게 답변했는지 볼까요?
          </span>
        </p>
      </div>

      <div className="space-y-3">
        {persona.members.map((member, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(member)}
            className={`w-full bg-gradient-to-r ${persona.gradient} p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-102 text-left flex items-center gap-4`}
          >
            <span className="text-4xl">{member.emoji}</span>
            <div>
              <div className="font-bold text-gray-800 text-lg">{member.role} 답변 보기</div>
              <div className="text-sm text-gray-600">
                {member.name}, {member.age}세
              </div>
            </div>
            <div className="ml-auto text-2xl text-gray-600">→</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Step 3: Answer View
function AnswerViewStep({
  persona,
  member,
  onNext,
  onBack,
}: {
  persona: Persona;
  member: FamilyMember;
  onNext: (nextMember?: FamilyMember) => void;
  onBack: () => void;
}) {
  const currentIndex = persona.members.indexOf(member);
  const nextMember = persona.members[currentIndex + 1];

  const getUIStyle = () => {
    switch (member.ageGroup) {
      case 'teenager':
        return {
          bg: 'bg-gradient-to-br from-gray-900 to-gray-800',
          text: 'text-white',
          card: 'bg-gray-800',
        };
      case 'senior':
        return {
          bg: 'bg-amber-50',
          text: 'text-gray-800',
          card: 'bg-white',
        };
      default:
        return {
          bg: 'bg-white',
          text: 'text-gray-800',
          card: 'bg-gray-50',
        };
    }
  };

  const style = getUIStyle();

  return (
    <div className={`min-h-full ${style.bg} p-6`}>
      {/* Header */}
      <div className="pt-6 pb-4 flex items-center gap-4">
        <button onClick={onBack} className={`text-2xl ${style.text}`}>
          ←
        </button>
        <div className="text-center flex-1">
          <p className={`text-xs ${style.text} opacity-70 mb-1`}>
            {member.emoji} {member.role}의 화면
          </p>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className={`text-sm ${style.text} opacity-70 mb-2`}>
          {member.ageGroup === 'teenager' ? '💭' : '📝'} 오늘의 질문
        </h3>
        <p className={`text-xl font-semibold ${style.text}`}>{persona.sampleQuestion.text}</p>
      </div>

      {/* Answer */}
      <div className={`${style.card} rounded-2xl p-5 mb-4 shadow-md`}>
        <p className={`${style.text} whitespace-pre-wrap leading-relaxed`}>
          {member.sampleAnswer.voice && (
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mb-3">
              {member.sampleAnswer.voice}
            </span>
          )}
          {member.sampleAnswer.text}
        </p>

        {member.sampleAnswer.stickers && (
          <div className="flex gap-2 mt-4">
            {member.sampleAnswer.stickers.map((sticker, idx) => (
              <span key={idx} className="text-2xl">
                {sticker}
              </span>
            ))}
          </div>
        )}

        <p className={`text-xs ${style.text} opacity-50 mt-4`}>
          ⏰ {member.sampleAnswer.time} 작성
        </p>

        {member.sampleAnswer.privacy && member.sampleAnswer.privacy !== 'all' && (
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              🔒 {member.sampleAnswer.privacy === 'parents_only' ? '부모님만 보기' : '나만 보기'}
            </span>
          </div>
        )}
      </div>

      {/* Comment */}
      {member.sampleAnswer.comment && (
        <div className={`${style.card} rounded-xl p-4 mb-4`}>
          <p className={`text-sm ${style.text} opacity-70 mb-1`}>💬 댓글</p>
          <p className={`${style.text}`}>{member.sampleAnswer.comment}</p>
        </div>
      )}

      {/* Guide */}
      <div className="bg-blue-50 rounded-xl p-4 mb-6">
        <p className="text-sm text-blue-900 flex items-start gap-2">
          <span>💬</span>
          <span>
            <strong>체험 포인트:</strong>
            <br />
            {member.ageGroup === 'teenager' &&
              '→ 청소년은 프라이버시 설정 가능\n→ 직접 말하기 어려운 고민도 OK'}
            {member.ageGroup === 'senior' &&
              '→ 음성 답변으로 쉬운 참여\n→ 큰 폰트, 간소화된 UI'}
            {member.ageGroup === 'adult' &&
              '→ 답변 후 댓글로 이어지는 대화\n→ 일상 대화로는 못한 진심 전달'}
            {member.ageGroup === 'child' &&
              '→ 부모 대리 작성 가능\n→ 스티커로 감정 표현'}
          </span>
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={() => onNext(nextMember)}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
      >
        {nextMember ? `${nextMember.role} 답변 보기 →` : '파몽이 반응 보기 →'}
      </button>
    </div>
  );
}

// Step 4: Famong Reaction
function FamongReactionStep({
  persona,
  onComplete,
}: {
  persona: Persona;
  onComplete: () => void;
}) {
  return (
    <div className="min-h-full bg-gradient-to-br from-yellow-50 to-orange-50 p-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🎉 모두 답변 완료!</h2>

      <div className="text-6xl mb-4">
        <pre className="text-3xl leading-tight">
{`   ╱|、
  (˚ˎ 。7   ❤️❤️❤️
   |、˜〵    건강도 UP!
  じしˍ,)ノ`}
        </pre>
      </div>

      <div className="bg-white rounded-2xl p-6 mb-6 w-full max-w-sm">
        <p className="text-sm text-gray-600 mb-3">오늘 답변: {persona.members.length}/{persona.members.length}명 완료</p>

        <div className="space-y-2">
          {persona.members.map((member, idx) => (
            <div key={idx} className="flex items-center gap-3 text-left">
              <span className="text-green-500">✅</span>
              <span className="text-gray-700">
                {member.emoji} {member.role} ({member.name})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-50 rounded-2xl p-6 mb-6 max-w-sm">
        <p className="text-sm text-gray-700">
          🎁 가족 모두 참여해서
          <br />
          파몽이가 행복해요!
        </p>
      </div>

      <p className="text-gray-600 mb-8 max-w-sm">
        💬 이런 소통이 매일 쌓이면
        <br />
        우리 가족만의 특별한 추억이 만들어져요.
      </p>

      <button
        onClick={onComplete}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        체험 완료하기
      </button>
    </div>
  );
}
