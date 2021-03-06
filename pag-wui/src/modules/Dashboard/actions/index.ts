import { createAction } from "redux-act";

export const imageTestUploadRequest = createAction<object>('IMAGE_TEST_UPLOAD_REQUEST');
export const imageAlreadyUploadedRequest = createAction<object>('IMAGE_ALREADY_UPLOADED_REQUEST');

export const imageUploadRequest = createAction<object>('IMAGE_UPLOAD_REQUEST');
export const imageUploadSuccess = createAction<object>('IMAGE_UPLOAD_SUCCESS');
export const imageUploadError = createAction<Error>('IMAGE_UPLOAD_ERROR');

export const pixelateImageRequest = createAction<string>('PIXELATE_IMAGE_REQUEST');
export const pixelateImageSuccess = createAction<object>('PIXELATE_IMAGE_SUCCESS');
export const pixelateImageError = createAction<Error>('PIXELATE_IMAGE_ERROR');
