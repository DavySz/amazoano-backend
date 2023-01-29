export interface IAuthEmailAndPassword {
  user: {
    first_name: string;
    last_name: string;
    userId: string;
    phone: string;
    email: string;
  };
  access_token: string;
}
