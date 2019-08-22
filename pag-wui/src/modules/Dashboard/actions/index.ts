import { createAction } from "redux-act";

export const imageUploadRequest = createAction<object>('IMAGE_UPLOAD_REQUEST');
export const imageUploadSuccess = createAction('IMAGE_UPLOAD_SUCCESS');
export const imageUploadError = createAction<Error>('IMAGE_UPLOAD_ERROR');
