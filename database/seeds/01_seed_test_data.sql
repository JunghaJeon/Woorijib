-- 테스트용 시드 데이터
-- 개발 환경에서만 사용

-- 테스트 사용자 생성
INSERT INTO users (id, email, name, birthdate, provider) VALUES
('11111111-1111-1111-1111-111111111111', 'father@test.com', '김아빠', '1980-05-15', 'email'),
('22222222-2222-2222-2222-222222222222', 'mother@test.com', '이엄마', '1982-03-20', 'email'),
('33333333-3333-3333-3333-333333333333', 'daughter@test.com', '김딸', '2010-07-10', 'email'),
('44444444-4444-4444-4444-444444444444', 'son@test.com', '김아들', '2015-12-25', 'email');

-- 테스트 가족 생성
INSERT INTO families (id, name, created_by, subscription_tier) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '김씨네 가족', '11111111-1111-1111-1111-111111111111', 'free');

-- 가족 구성원 추가
INSERT INTO family_members (family_id, user_id, role, nickname) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'parent', '아빠'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', 'parent', '엄마'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '33333333-3333-3333-3333-333333333333', 'child', '딸'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '44444444-4444-4444-4444-444444444444', 'child', '아들');

-- 테스트 우리펫 생성
INSERT INTO pets (id, family_id, name, type, level, experience) VALUES
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '복실이', 'dog', 3, 250);

-- 가족에 펫 연결
UPDATE families SET pet_id = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb' 
WHERE id = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

-- 테스트 감정 데이터
INSERT INTO emotions (user_id, family_id, emotion, note) VALUES
('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'happy', '오늘 회사에서 좋은 일이 있었어요'),
('22222222-2222-2222-2222-222222222222', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'calm', '평온한 하루였어요'),
('33333333-3333-3333-3333-333333333333', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'happy', '친구들이랑 재밌게 놀았어요');

