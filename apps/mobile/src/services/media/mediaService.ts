import {apiClient} from '../api/apiClient';
import {ApiResponse} from '../../types';

interface UploadResponse {
  url: string;
  thumbnailUrl?: string;
  type: 'image' | 'video' | 'audio';
}

interface MediaAsset {
  uri: string;
  type: string;
  fileName: string;
}

/**
 * 미디어 서비스
 */
export const mediaService = {
  /**
   * 이미지 업로드
   */
  async uploadImage(asset: MediaAsset): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', {
      uri: asset.uri,
      type: asset.type || 'image/jpeg',
      name: asset.fileName || 'image.jpg',
    } as any);

    const response = await apiClient.post<ApiResponse<UploadResponse>>(
      '/media/upload/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  /**
   * 동영상 업로드
   */
  async uploadVideo(asset: MediaAsset): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', {
      uri: asset.uri,
      type: asset.type || 'video/mp4',
      name: asset.fileName || 'video.mp4',
    } as any);

    const response = await apiClient.post<ApiResponse<UploadResponse>>(
      '/media/upload/video',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  /**
   * 음성 녹음 업로드
   */
  async uploadVoice(asset: MediaAsset): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', {
      uri: asset.uri,
      type: asset.type || 'audio/m4a',
      name: asset.fileName || 'voice.m4a',
    } as any);

    const response = await apiClient.post<ApiResponse<UploadResponse>>(
      '/media/upload/voice',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  /**
   * 여러 이미지 일괄 업로드
   */
  async uploadMultipleImages(assets: MediaAsset[]): Promise<UploadResponse[]> {
    const uploadPromises = assets.map(asset => this.uploadImage(asset));
    return Promise.all(uploadPromises);
  },

  /**
   * 미디어 삭제
   */
  async deleteMedia(url: string): Promise<void> {
    await apiClient.delete('/media', {data: {url}});
  },

  /**
   * 썸네일 URL 생성
   */
  getThumbnailUrl(originalUrl: string, width = 300, height = 300): string {
    // CloudFront를 통한 이미지 리사이징 URL 생성
    const url = new URL(originalUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('h', height.toString());
    return url.toString();
  },
};
