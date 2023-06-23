export interface GetBookClassRootParams {
  id: number;
}

export interface GetBookClassResponse<T> {
  message: 'ok';
  data: T;
}

export interface Data {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}
