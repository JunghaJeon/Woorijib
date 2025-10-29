import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateRequest } from '../middleware/validateRequest';
import { body } from 'express-validator';

const router = Router();
const authController = new AuthController();

// 회원가입
router.post(
  '/signup',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('name').notEmpty().trim(),
    validateRequest,
  ],
  authController.signup
);

// 로그인
router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
    validateRequest,
  ],
  authController.login
);

// 토큰 갱신
router.post('/refresh', authController.refreshToken);

// 로그아웃
router.post('/logout', authController.logout);

// 소셜 로그인
router.post('/social/kakao', authController.kakaoLogin);
router.post('/social/naver', authController.naverLogin);
router.post('/social/google', authController.googleLogin);
router.post('/social/apple', authController.appleLogin);

export default router;

