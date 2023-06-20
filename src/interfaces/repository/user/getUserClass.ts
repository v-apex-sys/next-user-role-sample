export interface GetUserClassRootParams {
  id: string;
}

export interface GetUserClassResponse<T> {
  message: 'ok';
  data: T;
}

export interface Data {
  id: string;
  name: string;
  mailAddress: string;
}
