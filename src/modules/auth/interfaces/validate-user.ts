export type TValidateUserResponse = {
  user: {
    first_name: string;
    last_name: string;
    userId: string;
    phone: string;
    email: string;
  };
  accessToken: string;
};
