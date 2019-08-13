export interface UserLogin {
  token: string;
  refreshToken: string;
  expire: number;
}
export interface User {
  email: string;
  id: number;
  password: string|null;
  refreshToken: string;
  role: UserRole;
  username: string;
}

export enum UserRole {
  user = "user",
  admin = "admin"
}
