export type ApiStatus =
  | "success"
  | "error"
  | "validation_error"
  | "authentication_error"
  | "authorization_error";

export interface ApiError {
  code: string;
  details?: unknown;
}

export interface ApiMeta {
  total?: number;
  page?: number;
  limit?: number;
  totalPage?: number;
}

export interface ApiResponse<T> {
  status: ApiStatus;
  message: string;
  data?: T;
  error?: ApiError;
  meta?: {
    timestamp?: string;
    version?: string;
  };
}
