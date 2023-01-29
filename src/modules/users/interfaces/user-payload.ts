export interface IUserPayload {
  sub: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
