export interface UserLogin {
  token: string;
  refreshToken: string;
  expire: number;
}
export interface User {
  username: string;
  role: UserRole
}

export enum UserRole {
  user = "user",
  admin = "admin"
}
