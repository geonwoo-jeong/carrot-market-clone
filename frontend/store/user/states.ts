export type User = {
  email: string;
  firstName: string;
  lastName: string;
  nickName: string;
  age?: number;
  phoneNumber?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IUserState {
  isLoggingOut: boolean; // Trying Logout
  isLoggingIn: boolean; // Trying Login
  logInErrorReason: string; // Login Failure Reason
  isSignedUp: boolean; // Success Signup
  isSigningUp: boolean; // Trying Signup
  signUpErrorReason: string; // Signup Failure Reason
  me: User; // My Information
  userInfo: User; // Other User Information
}

export const UserInitialState: IUserState = {
  isLoggingOut: false,
  isLoggingIn: false,
  logInErrorReason: "",
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorReason: "",
  me: null,
  userInfo: null,
};
