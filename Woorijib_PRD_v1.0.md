# 우리집 (우리집) Product Requirements Document
**Version 1.0**  
**Date: 2025-10-29**  
**Author: Product Planning Team**  
**Status: Draft**

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [User Research & Target Audience](#3-user-research--target-audience)
4. [Product Goals & Success Metrics](#4-product-goals--success-metrics)
5. [Feature Requirements](#5-feature-requirements)
6. [User Stories & Use Cases](#6-user-stories--use-cases)
7. [Technical Requirements](#7-technical-requirements)
8. [Design Requirements](#8-design-requirements)
9. [Data & Privacy Requirements](#9-data--privacy-requirements)
10. [Business Model & Monetization](#10-business-model--monetization)
11. [Launch Strategy & Roadmap](#11-launch-strategy--roadmap)
12. [Risk Assessment & Mitigation](#12-risk-assessment--mitigation)
13. [Appendix](#13-appendix)

---

## 1. Executive Summary

### 1.1 Product Vision
우리집은 가족 구성원들이 서로를 더 깊이 이해하고, 건강한 가족 관계를 구축할 수 있도록 돕는 모바일 애플리케이션입니다. 커플 앱 "Sumone"의 성공적인 경험을 바탕으로, 가족이라는 더 복잡하고 다양한 관계에 특화된 서비스를 제공합니다.

### 1.2 Problem Statement
현대 가족들이 직면한 핵심 문제:
- **시간적 제약**: 바쁜 일상으로 가족 간 대화 시간 절대 부족
- **세대 간 격차**: 서로 다른 세대의 언어, 문화, 가치관 차이로 인한 소통 단절
- **감정 표현 어려움**: 한국 문화 특성상 가족 간 애정 표현의 어색함
- **관계 악화 예방 부재**: 문제가 심각해진 후에야 인지하는 구조

### 1.3 Solution Overview
우리집은 다음과 같은 핵심 솔루션을 제공합니다:
- 매일 하나씩 제공되는 가족 맞춤형 질문으로 자연스러운 대화 유도
- 게이미피케이션 요소(패밀리 펫)를 통한 지속적 참여 동기 부여
- 세대별 맞춤 콘텐츠로 상호 이해 증진
- 프라이버시를 보장하면서도 필요한 소통 채널 제공

### 1.4 Expected Impact
- **정량적 목표**: 출시 1년 내 10만 가족 사용자 확보
- **정성적 목표**: 가족 관계 만족도 30% 향상, 가족 간 대화 시간 주당 2시간 증가

---

## 2. Product Overview

### 2.1 Product Definition
**제품명**: 우리집 (우리집)  
**카테고리**: 라이프스타일 / 소셜  
**플랫폼**: iOS, Android  
**타겟 시장**: 한국 (초기) → 동아시아 → 글로벌  
**핵심 가치 제안**: "우리 가족의 마음이 하나로 연결되는 공간"

### 2.2 Key Features Summary

#### 2.2.1 Core Features (MVP)
1. **패밀리 트리 질문 시스템**
   - 일일 가족 공통 질문
   - 세대별 맞춤 질문
   - 답변 기록 및 아카이빙

2. **패밀리 펫 (우리펫)**
   - 가족 공동 육성 시스템
   - 참여도 기반 성장
   - 보상 및 이벤트

3. **감정 체크인**
   - 일일 감정 상태 공유
   - 가족 구성원 케어 알림

4. **가족 앨범**
   - 사진/동영상 공유
   - 자동 정리 및 큐레이션

#### 2.2.2 Advanced Features (Post-MVP)
1. **세대 이해 콘텐츠**
   - 세대별 트렌드 소개
   - 부모/자녀 일상 이해 콘텐츠

2. **가족 미션 & 챌린지**
   - 주간/월간 미션
   - 가족 단위 보상

3. **가족 타임캡슐**
   - 장기 메시지 저장
   - 특별 날짜 오픈

4. **AI 기반 가족 코칭**
   - 관계 개선 제안
   - 맞춤형 콘텐츠 추천

### 2.3 Product Differentiators
1. **다세대 포용 설계**: 10대부터 70대까지 모두 사용 가능한 UX
2. **프라이버시 우선**: 개인 공간과 공유 공간의 균형
3. **문화적 맞춤화**: 한국 가족 문화 특성 반영
4. **검증된 팀**: Sumone 성공 경험 보유

### 2.4 Product Principles
1. **Simple & Intuitive**: 모든 세대가 쉽게 사용
2. **Privacy First**: 가족 내에서도 개인 프라이버시 존중
3. **Positive Reinforcement**: 긍정적 상호작용 강화
4. **Inclusive Design**: 장애인, 고령자 접근성 고려
5. **Cultural Sensitivity**: 다양한 가족 형태 존중

---

## 3. User Research & Target Audience

### 3.1 Primary Target Segments

#### Segment 1: 핵가족 (Nuclear Family)
**Demographics**
- 30-40대 부모 + 10-20대 자녀
- 도시 거주
- 중산층 이상
- 스마트폰 사용 능숙

**Characteristics**
- 맞벌이 부부 70%
- 자녀 1-2명
- 가족 시간 주당 10시간 미만
- 디지털 서비스 적극 활용

**Pain Points**
- 바쁜 일상으로 대화 시간 부족
- 자녀의 고민/관심사 파악 어려움
- 세대 차이로 인한 소통 방식 차이

#### Segment 2: 확대 가족 (Extended Family)
**Demographics**
- 3대 동거 또는 근거리 거주
- 50-70대 조부모 포함
- 다양한 디지털 리터러시 수준

**Characteristics**
- 주말 정기 모임
- 명절/기념일 중심 교류
- 조부모의 스마트폰 사용 증가 추세

**Pain Points**
- 조부모-손주 간 소통 채널 부재
- 세대 간 문화 차이 극복 어려움
- 디지털 격차로 인한 소외감

#### Segment 3: 청년 독립 가족
**Demographics**
- 20-30대 독립한 자녀
- 50-60대 부모
- 물리적 거리 존재

**Characteristics**
- 카톡/전화 중심 소통
- 월 1-2회 대면 만남
- 경제적 독립 단계

**Pain Points**
- 안부 확인 방법의 한계
- 서로의 일상 공유 어려움
- 부모님 건강/감정 상태 파악 어려움

### 3.2 User Personas

#### Persona 1: 워킹맘 김지영 (38세)
**Background**
- IT 기업 중간관리자
- 남편(40세), 딸(14세), 아들(11세)
- 서울 거주

**Goals**
- 사춘기 딸과의 관계 개선
- 가족 간 quality time 확보
- 자녀들의 고민 파악

**Behaviors**
- 출퇴근 시간 활용한 앱 사용
- 주말 가족 활동 계획
- 교육/육아 콘텐츠 적극 소비

**Needs**
- 간편한 소통 도구
- 자녀 이해를 위한 가이드
- 가족 추억 기록

#### Persona 2: 대학생 이준호 (22세)
**Background**
- 지방 대학 재학 중
- 부모님(50대) 고향 거주
- 기숙사 생활

**Goals**
- 부모님께 안부 전달
- 가족과 연결감 유지
- 부담 없는 소통

**Behaviors**
- SNS 네이티브
- 모바일 중심 생활
- 짧은 형식 콘텐츠 선호

**Needs**
- 비동기적 소통 방식
- 재미있는 상호작용
- 프라이버시 보장

#### Persona 3: 할머니 박순자 (68세)
**Background**
- 은퇴한 초등교사
- 아들 가족과 동거
- 스마트폰 초급 사용자

**Goals**
- 손주들과 친밀감 형성
- 가족 일원으로서 소속감
- 디지털 세계 적응

**Behaviors**
- 카톡, 유튜브 사용
- 음성 입력 선호
- 사진 보기/공유 즐김

**Needs**
- 쉬운 인터페이스
- 큰 글씨와 명확한 버튼
- 음성 기능 지원

### 3.3 User Journey Map

#### 신규 가족 온보딩 Journey
1. **Awareness**: SNS 광고/지인 추천으로 앱 인지
2. **Interest**: 앱스토어 리뷰 확인, 소개 영상 시청
3. **Download**: 가족 구성원 중 1명이 먼저 다운로드
4. **Invitation**: 가족 구성원 초대 (카톡 공유)
5. **Onboarding**: 가족 프로필 설정, 첫 질문 답변
6. **First Experience**: 패밀리 펫 받기, 첫 미션 수행
7. **Engagement**: 일일 질문 답변, 사진 공유
8. **Retention**: 타임캡슐 생성, 프리미엄 구독

### 3.4 Market Research Insights

#### 경쟁 서비스 분석
1. **Between** (커플 앱)
   - 강점: 강력한 프라이버시, 다양한 기능
   - 약점: 커플 전용, 가족 확장 불가

2. **FamilyAlbum** (가족 앨범)
   - 강점: 사진 중심, 쉬운 공유
   - 약점: 상호작용 부족, 단순 기록

3. **Life360** (가족 위치 공유)
   - 강점: 안전 기능, 위치 기반
   - 약점: 감시 느낌, 정서적 연결 부족

#### 시장 기회
- 한국 스마트폰 보급률 95% 이상
- 가족 관계 개선 니즈 지속 증가
- 세대 통합 서비스 부재
- 정부의 가족 정책 지원 확대

---

## 4. Product Goals & Success Metrics

### 4.1 Business Goals

#### Short-term (6 months)
1. **User Acquisition**: 10,000 가족 확보
2. **Engagement**: DAU/MAU 40% 달성
3. **Product-Market Fit**: NPS 50+ 달성

#### Mid-term (1 year)
1. **Scale**: 100,000 가족 확보
2. **Monetization**: 유료 전환율 10%
3. **Retention**: 6개월 리텐션 60%

#### Long-term (3 years)
1. **Market Leadership**: 한국 가족 앱 1위
2. **Global Expansion**: 3개국 진출
3. **Revenue**: 연 매출 100억원

### 4.2 User Goals
1. **Connection**: 가족 간 정서적 연결 강화
2. **Understanding**: 세대 간 상호 이해 증진
3. **Memory**: 가족 추억 체계적 보존
4. **Harmony**: 가족 갈등 예방 및 해결

### 4.3 Key Performance Indicators (KPIs)

#### Acquisition Metrics
- Monthly New Family Signups
- Invitation Conversion Rate
- Organic vs Paid Acquisition Ratio
- Cost Per Family Acquisition

#### Activation Metrics
- Onboarding Completion Rate
- First Week Retention
- Family Members per Account
- First Question Answer Rate

#### Engagement Metrics
- Daily Active Families (DAF)
- Questions Answered per Day
- Photos Shared per Week
- 우리펫 Interaction Rate
- Average Session Duration

#### Retention Metrics
- Day 1/7/30 Retention
- Monthly Churn Rate
- Resurrection Rate
- Feature Retention Curves

#### Revenue Metrics
- Premium Conversion Rate
- Average Revenue Per Family (ARPF)
- Customer Lifetime Value (CLV)
- Monthly Recurring Revenue (MRR)

### 4.4 Success Criteria

#### MVP Success Criteria
- 1,000 가족 베타 테스터 확보
- 일일 질문 답변율 60% 이상
- 평균 가족 구성원 3명 이상
- 베타 NPS 40 이상

#### Launch Success Criteria
- 첫 달 5,000 가족 가입
- 주간 리텐션 70% 이상
- 앱스토어 평점 4.5 이상
- 언론 보도 10건 이상

---

## 5. Feature Requirements

### 5.1 패밀리 트리 질문 시스템

#### 5.1.1 Feature Description
매일 가족 구성원들에게 제공되는 질문을 통해 자연스러운 대화와 상호 이해를 유도하는 핵심 기능

#### 5.1.2 Functional Requirements

**질문 생성 및 배포**
- FR-QS-001: 시스템은 매일 오전 8시에 새로운 질문을 생성해야 한다
- FR-QS-002: 질문은 가족 구성(연령, 인원)에 따라 맞춤화되어야 한다
- FR-QS-003: 공통 질문 1개 + 개인별 맞춤 질문 1개 제공
- FR-QS-004: 질문 난이도는 연령대별로 조정되어야 한다

**질문 카테고리**
- FR-QS-005: 일상 (30%): "오늘 가장 기억에 남는 순간은?"
- FR-QS-006: 추억 (20%): "우리 가족의 가장 웃긴 에피소드는?"
- FR-QS-007: 감정 (20%): "가족에게 고마웠던 순간은?"
- FR-QS-008: 미래 (15%): "가족과 함께 하고 싶은 버킷리스트는?"
- FR-QS-009: 가치관 (15%): "우리 가족만의 특별한 규칙이 있다면?"

**답변 시스템**
- FR-QS-010: 텍스트 답변 (최대 500자)
- FR-QS-011: 사진 첨부 가능 (최대 3장)
- FR-QS-012: 음성 답변 옵션 (최대 1분)
- FR-QS-013: 답변 수정 가능 (24시간 내)
- FR-QS-014: 익명 답변 옵션 제공

**알림 및 리마인더**
- FR-QS-015: 질문 도착 푸시 알림
- FR-QS-016: 미답변 시 저녁 8시 리마인더
- FR-QS-017: 가족 구성원 답변 완료 알림

#### 5.1.3 User Stories
- "부모로서 자녀의 하루 일과와 감정을 알고 싶다"
- "할머니로서 손주들과 대화할 주제가 필요하다"
- "자녀로서 부모님께 표현하기 어려운 감정을 전하고 싶다"

### 5.2 패밀리 펫 (우리펫) 시스템

#### 5.2.1 Feature Description
가족 구성원 모두가 함께 키우는 가상 펫으로, 가족의 상호작용과 참여를 게이미피케이션으로 유도

#### 5.2.2 Functional Requirements

**펫 생성 및 초기화**
- FR-PET-001: 가족 생성 시 랜덤 펫 배정 (3종 중 1)
- FR-PET-002: 펫 이름 설정 (가족 투표)
- FR-PET-003: 초기 레벨 1, 경험치 0

**성장 시스템**
- FR-PET-004: 가족 활동에 따른 경험치 획득
  - 질문 답변: +10 EXP
  - 사진 공유: +5 EXP
  - 미션 완료: +20 EXP
  - 전원 참여 보너스: +30 EXP
- FR-PET-005: 레벨업 시 외형 변화 (5단계)
- FR-PET-006: 특별 진화 조건 (가족 화목도 기반)

**상호작용**
- FR-PET-007: 쓰다듬기 (일 3회)
- FR-PET-008: 먹이 주기 (답변으로 획득)
- FR-PET-009: 놀아주기 (미니게임)
- FR-PET-010: 펫 상태 표시 (행복도, 배고픔)

**보상 시스템**
- FR-PET-011: 일일 보상 (펫 상호작용)
- FR-PET-012: 레벨업 보상 (프리미엄 기능 체험)
- FR-PET-013: 이벤트 보상 (가족 기념일)

#### 5.2.3 Visual Requirements
- 귀엽고 친근한 캐릭터 디자인
- 3가지 기본 형태 (강아지, 고양이, 토끼 컨셉)
- 감정 표현 애니메이션 10종
- 계절별 코스튬 업데이트

### 5.3 감정 체크인 시스템

#### 5.3.1 Feature Description
가족 구성원의 일일 감정 상태를 간단히 공유하여 서로를 케어할 수 있는 기능

#### 5.3.2 Functional Requirements

**체크인 프로세스**
- FR-EMO-001: 하루 1회 감정 선택 (5가지 이모티콘)
- FR-EMO-002: 선택적 한 줄 설명 추가
- FR-EMO-003: 체크인 시간 자동 기록

**감정 카테고리**
- FR-EMO-004: 😊 기쁨 / 😔 슬픔 / 😤 화남 / 😰 불안 / 😌 평온

**케어 시스템**
- FR-EMO-005: 부정적 감정 체크인 시 가족에게 알림
- FR-EMO-006: 응원 메시지 전송 기능
- FR-EMO-007: 하트/포옹 이모티콘 전송

**감정 트렌드**
- FR-EMO-008: 주간 감정 그래프
- FR-EMO-009: 가족 전체 감정 날씨
- FR-EMO-010: 월간 감정 리포트

### 5.4 가족 앨범 및 추억 보관

#### 5.4.1 Feature Description
가족의 사진과 동영상을 체계적으로 보관하고 자동으로 큐레이션하는 기능

#### 5.4.2 Functional Requirements

**미디어 업로드**
- FR-ALB-001: 사진 업로드 (최대 10장/일)
- FR-ALB-002: 동영상 업로드 (최대 1분, 100MB)
- FR-ALB-003: 일괄 업로드 지원
- FR-ALB-004: 클라우드 자동 백업

**자동 정리**
- FR-ALB-005: AI 얼굴 인식 기반 인물별 분류
- FR-ALB-006: 날짜/장소별 자동 그룹핑
- FR-ALB-007: 이벤트 자동 감지 (생일, 여행 등)

**큐레이션**
- FR-ALB-008: 월간 베스트 포토 자동 선정
- FR-ALB-009: "1년 전 오늘" 추억 알림
- FR-ALB-010: 테마별 앨범 자동 생성

**공유 및 권한**
- FR-ALB-011: 가족 내 자동 공유
- FR-ALB-012: 외부 공유 링크 생성
- FR-ALB-013: 다운로드 권한 설정

### 5.5 가족 미션 & 챌린지

#### 5.5.1 Feature Description
가족 단위로 수행하는 미션을 통해 함께하는 시간을 늘리고 유대감을 강화

#### 5.5.2 Functional Requirements

**미션 시스템**
- FR-MIS-001: 주간 미션 3개 제공
- FR-MIS-002: 난이도별 미션 (쉬움/보통/어려움)
- FR-MIS-003: 가족 구성 맞춤 미션

**미션 유형**
- FR-MIS-004: 함께 하기: "가족 영화 보기", "보드게임 하기"
- FR-MIS-005: 표현 하기: "서로 칭찬하기", "감사 편지 쓰기"
- FR-MIS-006: 추억 만들기: "가족 사진 찍기", "요리 함께 하기"

**완료 및 보상**
- FR-MIS-007: 사진/동영상 인증
- FR-MIS-008: 가족 구성원 과반수 승인
- FR-MIS-009: 포인트/배지 보상
- FR-MIS-010: 패밀리 펫 경험치 보너스

### 5.6 가족 타임캡슐

#### 5.6.1 Feature Description
미래의 특정 시점에 열어볼 수 있는 메시지와 미디어를 저장하는 기능

#### 5.6.2 Functional Requirements

**타임캡슐 생성**
- FR-TC-001: 개봉 날짜 설정 (1년/3년/5년/10년/커스텀)
- FR-TC-002: 텍스트 메시지 작성
- FR-TC-003: 사진/동영상 첨부
- FR-TC-004: 음성 메시지 녹음

**타입별 타임캡슐**
- FR-TC-005: 개인 → 개인 (비공개)
- FR-TC-006: 개인 → 가족 전체
- FR-TC-007: 가족 공동 제작
- FR-TC-008: 이벤트 연동 (결혼, 성년 등)

**개봉 및 알림**
- FR-TC-009: D-30일 알림
- FR-TC-010: 개봉일 푸시 알림
- FR-TC-011: 개봉 세레모니 애니메이션

### 5.7 프라이버시 & 개인 공간

#### 5.7.1 Feature Description
가족 내에서도 개인의 프라이버시를 보호하고 선택적 공유를 가능하게 하는 기능

#### 5.7.2 Functional Requirements

**개인 일기장**
- FR-PRV-001: 비공개 일기 작성
- FR-PRV-002: 선택적 공개 설정
- FR-PRV-003: 공개 범위 지정 (특정 가족 구성원)

**익명 기능**
- FR-PRV-004: 익명 질문 답변
- FR-PRV-005: 익명 고민 상담
- FR-PRV-006: 익명 투표

**콘텐츠 필터링**
- FR-PRV-007: 연령별 콘텐츠 필터
- FR-PRV-008: 민감한 주제 설정
- FR-PRV-009: 자녀 보호 모드

---

## 6. User Stories & Use Cases

### 6.1 Epic Level User Stories

#### Epic 1: 가족 온보딩
"새로운 가족 사용자로서, 쉽고 빠르게 우리 가족을 설정하고 서비스를 시작하고 싶다"

**User Stories:**
- US-1.1: 가족 관리자로서, 가족 그룹을 생성하고 구성원을 초대하고 싶다
- US-1.2: 초대받은 가족으로서, 간단히 가입하고 프로필을 설정하고 싶다
- US-1.3: 할머니로서, 복잡하지 않게 앱을 시작하고 싶다
- US-1.4: 가족 구성원으로서, 우리 가족만의 규칙과 목표를 설정하고 싶다

#### Epic 2: 일상 소통
"가족 구성원으로서, 매일 자연스럽게 소통하고 서로를 이해하고 싶다"

**User Stories:**
- US-2.1: 부모로서, 자녀의 하루 일과와 감정을 알고 싶다
- US-2.2: 자녀로서, 부모님께 학교 생활을 공유하고 싶다
- US-2.3: 할아버지로서, 손주의 관심사를 이해하고 대화하고 싶다
- US-2.4: 워킹맘으로서, 바쁜 중에도 가족과 연결되어 있고 싶다

#### Epic 3: 추억 만들기
"가족 구성원으로서, 소중한 순간들을 기록하고 추억으로 간직하고 싶다"

**User Stories:**
- US-3.1: 부모로서, 아이들의 성장 과정을 체계적으로 기록하고 싶다
- US-3.2: 자녀로서, 가족 여행의 추억을 모두와 공유하고 싶다
- US-3.3: 가족 구성원으로서, 특별한 날의 메시지를 미래에 전달하고 싶다
- US-3.4: 할머니로서, 옛날 이야기와 가족 역사를 전수하고 싶다

### 6.2 Detailed Use Cases

#### Use Case: 일일 질문 답변하기

**UC-001: Daily Question Response**

**Actor**: 가족 구성원 (부모)

**Preconditions**:
- 사용자가 앱에 로그인되어 있음
- 오늘의 질문이 생성되어 있음

**Main Flow**:
1. 사용자가 앱을 실행한다
2. 홈 화면에 오늘의 질문이 표시된다
3. 사용자가 질문 카드를 탭한다
4. 답변 작성 화면이 열린다
5. 사용자가 텍스트로 답변을 입력한다
6. [선택] 사용자가 사진을 첨부한다
7. 사용자가 "제출" 버튼을 탭한다
8. 시스템이 답변을 저장하고 확인 메시지를 표시한다
9. 다른 가족 구성원에게 답변 알림이 전송된다

**Alternative Flows**:
- 3a. 사용자가 음성 답변을 선택한다
  - 3a1. 음성 녹음 인터페이스가 표시된다
  - 3a2. 사용자가 음성을 녹음한다
  - 3a3. 시스템이 음성을 텍스트로 변환한다 (선택사항)
  
- 5a. 사용자가 익명 답변을 선택한다
  - 5a1. 익명 답변 확인 팝업이 표시된다
  - 5a2. 사용자가 확인한다
  - 5a3. 답변이 익명으로 표시됨 설정된다

**Postconditions**:
- 답변이 가족 타임라인에 표시됨
- 패밀리 펫이 경험치를 획득함
- 사용자의 답변 streak이 업데이트됨

**Exceptions**:
- E1: 네트워크 연결 실패 시 로컬 저장 후 재시도
- E2: 부적절한 콘텐츠 감지 시 경고 메시지 표시

---

## 7. Technical Requirements

### 7.1 Platform Requirements

#### 7.1.1 Mobile Applications
**iOS**
- Minimum iOS version: 14.0
- Supported devices: iPhone 6s and later
- iPad support: Responsive layout
- Required capabilities: Push Notifications, Camera, Photo Library, Microphone

**Android**
- Minimum Android version: 7.0 (API level 24)
- Target Android version: 14 (API level 34)
- Required permissions: Internet, Camera, Storage, Record Audio, Notifications

#### 7.1.2 Backend Infrastructure
**Cloud Platform**: AWS (Primary) / GCP (Backup)
- Region: ap-northeast-2 (Seoul)
- Multi-AZ deployment for high availability

**Architecture Pattern**: Microservices
- API Gateway: Kong/AWS API Gateway
- Service Mesh: Istio
- Container Orchestration: Kubernetes (EKS)

### 7.2 Technical Architecture

#### 7.2.1 System Architecture
```
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                         │
├──────────────────────┬───────────────────────────────────┤
│      iOS App        │          Android App               │
│   (Swift/SwiftUI)   │      (Kotlin/Jetpack Compose)     │
└──────────┬───────────┴──────────────┬────────────────────┘
          │                           │
          ▼                           ▼
┌─────────────────────────────────────────────────────────┐
│                    API Gateway                           │
│                 (REST API / GraphQL)                     │
└─────────────────────┬────────────────────────────────────┘
                      │
          ┌───────────┼───────────┬─────────────┐
          ▼           ▼           ▼             ▼
┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│   Auth       │ │ Question │ │  Family  │ │  Media   │
│  Service     │ │ Service  │ │ Service  │ │ Service  │
└──────────────┘ └──────────┘ └──────────┘ └──────────┘
          │           │           │             │
          ▼           ▼           ▼             ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Layer                             │
├──────────────┬──────────────┬──────────────┬────────────┤
│  PostgreSQL  │   MongoDB    │     Redis    │    S3      │
│  (User/Family)│  (Content)   │   (Cache)    │  (Media)   │
└──────────────┴──────────────┴──────────────┴────────────┘
```

#### 7.2.2 Core Services

**Authentication Service**
- Tech Stack: Node.js + Express
- Auth Method: JWT + Refresh Token
- Social Login: Kakao, Naver, Apple, Google
- MFA Support: SMS, Email OTP

**Family Service**
- Tech Stack: Java Spring Boot
- Database: PostgreSQL
- Features: Family creation, member management, permissions

**Question Service**
- Tech Stack: Python FastAPI
- Database: MongoDB
- ML/AI: Question personalization algorithm
- Cache: Redis for daily questions

**Media Service**
- Tech Stack: Node.js
- Storage: AWS S3
- CDN: CloudFront
- Processing: Lambda for thumbnail generation
- AI: Rekognition for face detection

**Notification Service**
- Tech Stack: Go
- Push: FCM (Android), APNS (iOS)
- Queue: AWS SQS
- Scheduling: AWS EventBridge

### 7.3 Data Architecture

#### 7.3.1 Database Schema (Core Tables)

**Users Table**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    name VARCHAR(100),
    birthdate DATE,
    profile_image_url TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

**Families Table**
```sql
CREATE TABLE families (
    id UUID PRIMARY KEY,
    name VARCHAR(100),
    created_by UUID REFERENCES users(id),
    pet_id UUID,
    subscription_tier VARCHAR(20),
    created_at TIMESTAMP
);
```

**Family_Members Table**
```sql
CREATE TABLE family_members (
    family_id UUID REFERENCES families(id),
    user_id UUID REFERENCES users(id),
    role VARCHAR(20), -- 'parent', 'child', 'grandparent'
    nickname VARCHAR(50),
    joined_at TIMESTAMP,
    PRIMARY KEY (family_id, user_id)
);
```

**Questions Collection (MongoDB)**
```json
{
  "_id": ObjectId,
  "question_text": {
    "ko": "오늘 가장 감사했던 순간은?",
    "en": "What moment were you most grateful for today?"
  },
  "category": "gratitude",
  "difficulty": "easy",
  "age_group": ["all"],
  "tags": ["daily", "emotion", "family"]
}
```

**Answers Collection (MongoDB)**
```json
{
  "_id": ObjectId,
  "question_id": ObjectId,
  "family_id": UUID,
  "user_id": UUID,
  "answer_text": "가족과 함께한 저녁 식사",
  "media_urls": [],
  "is_anonymous": false,
  "created_at": ISODate,
  "reactions": []
}
```

#### 7.3.2 Data Security
- Encryption at rest: AES-256
- Encryption in transit: TLS 1.3
- PII data masking in logs
- GDPR/KISA compliance
- Regular security audits

### 7.4 Performance Requirements

#### 7.4.1 Response Time
- API response time: < 200ms (p95)
- Image upload: < 3 seconds (10MB)
- App cold start: < 2 seconds
- Screen transition: < 300ms

#### 7.4.2 Scalability
- Support 1M+ concurrent users
- Auto-scaling based on CPU/Memory
- Database read replicas
- Horizontal scaling for all services

#### 7.4.3 Reliability
- Uptime SLA: 99.9%
- RTO: < 1 hour
- RPO: < 10 minutes
- Automatic failover

### 7.5 Third-party Integrations

#### 7.5.1 Essential Integrations
- **Push Notifications**: FCM, APNS
- **Analytics**: Amplitude, Firebase Analytics
- **Crash Reporting**: Sentry
- **A/B Testing**: Optimizely
- **Customer Support**: Zendesk

#### 7.5.2 Future Integrations
- **Calendar Sync**: Google Calendar, Apple Calendar
- **Photo Printing**: Snapfish API
- **Gift Recommendations**: Coupang Partners API
- **Family Counseling**: Certified counselor network

### 7.6 Development Requirements

#### 7.6.1 Development Stack
- Version Control: Git (GitHub)
- CI/CD: GitHub Actions
- Code Quality: SonarQube
- Testing: Jest, JUnit, XCTest
- Documentation: Swagger/OpenAPI

#### 7.6.2 Development Principles
- Test Coverage: Minimum 80%
- Code Review: Required for all PRs
- API Versioning: Semantic versioning
- Feature Flags: LaunchDarkly
- Monitoring: DataDog, CloudWatch

---

## 8. Design Requirements

### 8.1 Design Principles

#### 8.1.1 Core Design Values
1. **Warmth & Emotional Connection**
   - Soft, rounded corners
   - Warm color palette
   - Friendly illustrations
   - Positive micro-interactions

2. **Simplicity & Accessibility**
   - Clear visual hierarchy
   - Large touch targets (minimum 44pt)
   - High contrast text
   - Simple navigation patterns

3. **Multi-generational Inclusive**
   - Scalable text (up to 200%)
   - Clear icons with labels
   - Consistent patterns
   - Voice-over support

4. **Playful Yet Trustworthy**
   - Subtle animations
   - Delightful surprises
   - Professional typography
   - Secure feeling

### 8.2 Visual Design System

#### 8.2.1 Color Palette

**Primary Colors**
- Primary Blue: #4A90E2 (Trust, Connection)
- Warm Orange: #FF6B6B (Energy, Joy)
- Soft Green: #4ECDC4 (Growth, Harmony)

**Neutral Colors**
- Dark Gray: #2C3E50 (Primary text)
- Medium Gray: #7F8C8D (Secondary text)
- Light Gray: #ECF0F1 (Backgrounds)
- White: #FFFFFF (Cards, surfaces)

**Semantic Colors**
- Success: #27AE60
- Warning: #F39C12
- Error: #E74C3C
- Info: #3498DB

#### 8.2.2 Typography

**Font Family**
- Primary: Pretendard (Korean), SF Pro (English)
- Secondary: Noto Sans KR

**Type Scale**
```
Display:  32pt - Bold
Title 1:  28pt - Semibold  
Title 2:  24pt - Semibold
Title 3:  20pt - Medium
Body:     16pt - Regular
Caption:  14pt - Regular
Small:    12pt - Regular
```

**Accessibility Settings**
- Default: 16pt base
- Large: 20pt base
- Extra Large: 24pt base

#### 8.2.3 Iconography
- Style: Outlined with rounded corners
- Stroke: 2pt
- Size: 24x24pt (default), 32x32pt (large)
- Custom family-themed icon set

### 8.3 Component Design

#### 8.3.1 Navigation
**Bottom Tab Bar**
- 5 tabs: Home, Questions, Pet, Album, Profile
- Active state: Filled icon + Label
- Inactive: Outlined icon
- Badge for notifications

**Top Navigation**
- Transparent with blur effect
- Family name as title
- Notification bell icon
- Settings gear icon

#### 8.3.2 Cards & Containers
**Question Card**
```
┌─────────────────────────────┐
│  📅 Today's Question        │
│                              │
│  "오늘 가장 행복했던        │
│   순간은 무엇인가요?"        │
│                              │
│  [답변하기]                  │
│                              │
│  👨‍👩‍👧‍👦 3/5 answered         │
└─────────────────────────────┘
```

**Family Member Card**
```
┌─────────────────────────────┐
│  [👤]  엄마                  │
│  😊 기쁨                     │
│  "오늘은 정말 좋은 하루!"    │
│                     2시간 전  │
└─────────────────────────────┘
```

#### 8.3.3 Input Components
- Text fields with floating labels
- Voice input button integration
- Photo picker with preview
- Emoji selector for reactions

### 8.4 Interaction Design

#### 8.4.1 Gestures
- Tap: Primary actions
- Long press: Context menu
- Swipe: Navigate between days/photos
- Pinch: Zoom photos
- Pull to refresh: Update content

#### 8.4.2 Animations
**Micro-interactions**
- Button tap: Scale 0.95 with spring
- Card appearance: Fade in + slide up
- Loading: Skeleton screens
- Success: Confetti animation

**Transitions**
- Screen push: 300ms ease-in-out
- Modal present: Bottom sheet slide
- Tab switch: Cross-fade 200ms

#### 8.4.3 Feedback
- Haptic feedback for important actions
- Sound effects (optional)
- Visual confirmation for submissions
- Progress indicators for uploads

### 8.5 Responsive Design

#### 8.5.1 Screen Breakpoints
- Phone Portrait: 320-414pt width
- Phone Landscape: 568-896pt width
- Tablet Portrait: 768-834pt width
- Tablet Landscape: 1024-1366pt width

#### 8.5.2 Layout Adaptations
**Phone Layout**
- Single column
- Full-width cards
- Vertical scrolling

**Tablet Layout**
- Two-column grid for content
- Side navigation drawer
- Modal overlays for forms

### 8.6 Accessibility Requirements

#### 8.6.1 Visual Accessibility
- WCAG 2.1 AA compliance
- Minimum contrast ratio 4.5:1
- Color-blind friendly palette
- Focus indicators

#### 8.6.2 Motor Accessibility
- Minimum touch target: 44x44pt
- Gesture alternatives
- Adjustable tap timeout
- One-handed operation mode

#### 8.6.3 Cognitive Accessibility
- Clear labels and instructions
- Consistent navigation
- Error prevention
- Undo functionality

#### 8.6.4 Screen Reader Support
- VoiceOver (iOS) full support
- TalkBack (Android) full support
- Semantic HTML structure
- ARIA labels for icons

### 8.7 Branding Guidelines

#### 8.7.1 Logo Usage
- Minimum size: 24pt height
- Clear space: 0.5x logo height
- Color variations: Full color, mono
- Prohibited: Stretching, rotating

#### 8.7.2 App Icon
- Rounded rectangle (iOS)
- Adaptive icon (Android)
- Key element: Family tree symbol
- Background: Gradient (Primary colors)

#### 8.7.3 Marketing Materials
- Photography: Real families, diverse
- Illustration style: Warm, hand-drawn
- Tone of voice: Friendly, inclusive
- Key message: "Connect, Understand, Grow"

---

## 9. Data & Privacy Requirements

### 9.1 Data Collection & Usage

#### 9.1.1 Data Types Collected
**Personal Information**
- Name, email, phone number
- Birth date (age verification)
- Profile photo (optional)
- Family relationships

**Usage Data**
- App usage patterns
- Feature engagement metrics
- Content creation frequency
- Session duration

**Content Data**
- Question answers
- Photos and videos
- Voice recordings
- Text messages

**Device Data**
- Device ID
- OS version
- App version
- Push notification tokens

#### 9.1.2 Data Usage Purposes
1. **Service Provision**
   - User authentication
   - Content delivery
   - Feature functionality

2. **Service Improvement**
   - Usage analytics
   - Bug tracking
   - Feature optimization

3. **Personalization**
   - Question recommendations
   - Content curation
   - Family-specific features

4. **Communication**
   - Service notifications
   - Marketing (opt-in only)
   - Customer support

### 9.2 Privacy Protection

#### 9.2.1 Privacy Principles
- **Minimal Collection**: Only collect necessary data
- **Purpose Limitation**: Use data only for stated purposes
- **Transparency**: Clear privacy policy
- **User Control**: Easy data management options
- **Security First**: Industry-standard protection

#### 9.2.2 User Rights
- **Access**: View all collected data
- **Correction**: Update incorrect information
- **Deletion**: Request account deletion
- **Portability**: Export personal data
- **Objection**: Opt-out of processing

#### 9.2.3 Child Protection
- Age verification during signup
- Parental consent for users under 14
- Content filtering for minors
- No targeted advertising to children
- Limited data collection from minors

### 9.3 Security Measures

#### 9.3.1 Technical Security
- End-to-end encryption for sensitive messages
- AES-256 encryption for data at rest
- TLS 1.3 for data in transit
- Secure key management (AWS KMS)
- Regular security audits

#### 9.3.2 Access Control
- Role-based access control (RBAC)
- Multi-factor authentication option
- Session timeout after inactivity
- Suspicious activity detection
- Account recovery verification

#### 9.3.3 Compliance
- PIPA (Personal Information Protection Act) - Korea
- GDPR ready for EU expansion
- COPPA compliance for children
- ISO 27001 certification (target)
- Regular compliance audits

### 9.4 Data Retention & Deletion

#### 9.4.1 Retention Periods
- Active account data: Retained while account active
- Deleted content: Removed within 30 days
- Backup data: 90 days retention
- Analytics data: 2 years (anonymized)
- Legal hold: As required by law

#### 9.4.2 Account Deletion Process
1. User requests deletion
2. 30-day grace period (recovery option)
3. Complete data removal
4. Confirmation email sent
5. Anonymized analytics retained

---

## 10. Business Model & Monetization

### 10.1 Revenue Streams

#### 10.1.1 Freemium Model

**Free Tier**
- Basic features for up to 5 family members
- 10 photos/day upload limit
- 1GB storage
- Standard question sets
- Basic 우리펫 pet

**Premium Tier (₩9,900/month)**
- Unlimited family members
- Unlimited photo/video uploads
- 100GB cloud storage
- Premium question sets
- Special 우리펫 pets & costumes
- Advanced analytics & insights
- Priority customer support

**Premium Plus (₩19,900/month)**
- All Premium features
- Unlimited storage
- Video calls integration
- Professional photo printing credits
- Family counseling session discounts
- Early access to new features

#### 10.1.2 Additional Revenue Streams

**Physical Products**
- Annual photo books: ₩39,900
- 우리펫 merchandise: ₩15,000-35,000
- Custom family calendars: ₩25,000
- Time capsule boxes: ₩49,900

**Digital Products**
- Premium question packs: ₩3,900
- Special 우리펫 themes: ₩2,900
- Family activity guides: ₩9,900
- Milestone celebration packs: ₩5,900

**Partnership Revenue**
- Family event tickets (commission)
- Restaurant/activity bookings (commission)
- Insurance/financial products (referral)
- Educational content (licensing)

### 10.2 Pricing Strategy

#### 10.2.1 Market Positioning
- Premium pricing vs. free alternatives
- Value-based pricing model
- Family bundle discounts
- Annual payment incentives (20% off)

#### 10.2.2 Promotional Strategy
- 1-month free trial for Premium
- Referral rewards (1 month free per referral)
- Seasonal promotions (Family Month - May)
- Corporate benefits partnerships

### 10.3 Unit Economics

#### 10.3.1 Cost Structure
**Customer Acquisition Cost (CAC)**
- Target: ₩15,000 per family
- Channels: 60% organic, 40% paid

**Infrastructure Costs (per family/month)**
- Server & hosting: ₩500
- Storage: ₩300
- Third-party services: ₩200

**Operating Expenses**
- Development: 40% of revenue
- Marketing: 25% of revenue
- Operations: 15% of revenue
- G&A: 10% of revenue

#### 10.3.2 Revenue Projections
**Year 1 Targets**
- Total families: 100,000
- Paid conversion: 10%
- ARPU: ₩5,000
- Annual revenue: ₩6 billion

**Year 3 Targets**
- Total families: 1,000,000
- Paid conversion: 20%
- ARPU: ₩8,000
- Annual revenue: ₩96 billion

### 10.4 Business Partnerships

#### 10.4.1 Strategic Partners
- **Content Partners**: Educational institutions, child psychologists
- **Distribution Partners**: Telecom companies, device manufacturers
- **Marketing Partners**: Family brands, parenting communities
- **Technology Partners**: Cloud providers, AI/ML services

#### 10.4.2 B2B Opportunities
- Corporate employee benefits
- School family engagement programs
- Government family welfare initiatives
- Insurance company wellness programs

---

## 11. Launch Strategy & Roadmap

### 11.1 Pre-Launch Phase (Months -3 to 0)

#### 11.1.1 Beta Testing Program
**Timeline**: 3 months before launch

**Beta Recruitment**
- Target: 1,000 families
- Channels: Sumone users, parenting communities
- Incentive: Lifetime 50% discount

**Beta Objectives**
- Bug identification & fixes
- Feature validation
- Content quality testing
- User feedback collection

**Success Metrics**
- 70% weekly active rate
- NPS > 50
- <1% crash rate
- 90% core feature adoption

#### 11.1.2 Content Preparation
- 365 initial questions (validated & translated)
- 3 우리펫 character designs
- 50 family mission templates
- Onboarding tutorial content

#### 11.1.3 Marketing Preparation
- Brand identity finalization
- Website & landing pages
- App store assets
- PR kit & press releases
- Influencer partnerships

### 11.2 Launch Phase (Months 0 to 3)

#### 11.2.1 Soft Launch Strategy
**Week 1-2**: Friends & Family
- Internal team families
- Close partners & investors
- Limited PR

**Week 3-4**: Gradual Rollout
- 10% of app store traffic
- Selected regions (Seoul/Gyeonggi)
- Monitor & optimize

**Month 2-3**: Full Launch
- 100% app store availability
- National marketing campaign
- Media PR push

#### 11.2.2 Launch Marketing Campaign

**Campaign Theme**: "우리 가족, 더 가까이" (Our Family, Closer Together)

**Digital Marketing**
- Social media campaign (Instagram, Facebook)
- Influencer partnerships (10 family influencers)
- Content marketing (parenting blogs)
- Search ads (Google, Naver)

**Traditional Marketing**
- Press releases to major media
- Parenting magazine advertisements
- Radio sponsorships
- Outdoor advertising in family areas

**Launch Events**
- Virtual launch event for media
- Family Day celebration events
- Pop-up experiences in malls
- School partnership programs

### 11.3 Growth Phase (Months 3-12)

#### 11.3.1 Product Roadmap

**Q1 (Months 1-3): Foundation**
- ✅ Core features (Questions, Pet, Album)
- ✅ Basic analytics
- ✅ Push notifications
- ✅ Bug fixes & optimization

**Q2 (Months 4-6): Enhancement**
- Family missions & challenges
- Premium tier launch
- Voice message support
- iPad/Tablet optimization

**Q3 (Months 7-9): Expansion**
- Time capsule feature
- AI-powered insights
- Video call integration
- Physical product store

**Q4 (Months 10-12): Innovation**
- AR 우리펫 interactions
- Family coaching content
- API partnerships
- International preparation

#### 11.3.2 Growth Tactics

**Viral Mechanisms**
- Family invitation rewards
- Shared achievement celebrations
- Social media sharing features
- Referral program

**Retention Strategies**
- Daily notification optimization
- Streak rewards
- Seasonal events & themes
- Community building

**Expansion Plans**
- B2B enterprise sales
- Government partnerships
- Educational institution programs
- International markets research

### 11.4 Success Milestones

#### 11.4.1 Product Milestones
- Month 1: 5,000 families
- Month 3: 25,000 families
- Month 6: 50,000 families
- Month 12: 100,000 families

#### 11.4.2 Business Milestones
- Month 3: First premium subscribers
- Month 6: Break-even on unit economics
- Month 9: Series A funding
- Month 12: International expansion planning

---

## 12. Risk Assessment & Mitigation

### 12.1 Technical Risks

#### 12.1.1 Scalability Issues
**Risk**: System unable to handle rapid user growth
**Probability**: Medium
**Impact**: High
**Mitigation**:
- Auto-scaling architecture from day 1
- Load testing before launch
- CDN for media delivery
- Database sharding strategy

#### 12.1.2 Data Breach
**Risk**: User data compromise
**Probability**: Low
**Impact**: Critical
**Mitigation**:
- Security audit before launch
- Bug bounty program
- Incident response plan
- Cyber insurance

### 12.2 Business Risks

#### 12.2.1 Low User Adoption
**Risk**: Families don't see value
**Probability**: Medium
**Impact**: High
**Mitigation**:
- Extensive beta testing
- Iterative feature development
- Strong onboarding experience
- Community feedback loops

#### 12.2.2 Competition
**Risk**: Big tech companies enter market
**Probability**: High
**Impact**: Medium
**Mitigation**:
- Fast execution & iteration
- Strong brand loyalty
- Unique features (우리펫)
- Network effects

### 12.3 Regulatory Risks

#### 12.3.1 Privacy Regulations
**Risk**: New privacy laws affecting operations
**Probability**: Medium
**Impact**: Medium
**Mitigation**:
- Privacy-by-design architecture
- Legal counsel consultation
- Flexible data handling systems
- Regular compliance audits

#### 12.3.2 Child Safety Concerns
**Risk**: Issues with minor user safety
**Probability**: Low
**Impact**: High
**Mitigation**:
- Strict age verification
- Parental controls
- Content moderation
- Clear safety policies

### 12.4 Operational Risks

#### 12.4.1 Team Scaling Challenges
**Risk**: Unable to hire quality talent fast enough
**Probability**: Medium
**Impact**: Medium
**Mitigation**:
- Early recruiting pipeline
- Competitive compensation
- Strong company culture
- Remote work options

#### 12.4.2 Customer Support Overload
**Risk**: Unable to handle support volume
**Probability**: Medium
**Impact**: Medium
**Mitigation**:
- Self-service resources
- Community support forums
- AI chatbot implementation
- Tiered support system

### 12.5 Risk Monitoring

#### 12.5.1 Key Risk Indicators
- Daily active user trends
- Customer support ticket volume
- System performance metrics
- Security threat alerts
- Regulatory change notifications

#### 12.5.2 Risk Review Process
- Weekly team risk assessment
- Monthly board risk review
- Quarterly risk audit
- Annual risk strategy update

---

## 13. Appendix

### 13.1 Glossary
- **DAF**: Daily Active Families
- **우리펫**: Family + Among, 패밀리 펫 캐릭터
- **Question Streak**: 연속 답변 일수
- **Time Capsule**: 미래 날짜에 열리는 메시지

### 13.2 References
- Sumone App Case Study
- Korea Family Statistics 2024
- Mobile App Usage Trends Report
- Family Communication Research Papers

### 13.3 Mockups & Wireframes
[별도 Figma 파일 참조]
- Onboarding Flow
- Home Screen Designs
- Question Interface
- 우리펫 Interactions
- Family Album Views

### 13.4 Technical Specifications
[별도 기술 문서 참조]
- API Documentation
- Database Schema Details
- Infrastructure Architecture
- Security Protocols

### 13.5 Legal Documents
[법무팀 검토 필요]
- Terms of Service Draft
- Privacy Policy Draft
- Child Safety Policy
- Community Guidelines

### 13.6 Contact Information
- Product Owner: [Name] - product@famone.com
- Tech Lead: [Name] - tech@famone.com
- Design Lead: [Name] - design@famone.com
- Marketing Lead: [Name] - marketing@famone.com

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-29 | Product Team | Initial PRD creation |
| | | | |

---

**END OF DOCUMENT**

*This PRD is a living document and will be updated regularly based on user feedback, market conditions, and business priorities.*