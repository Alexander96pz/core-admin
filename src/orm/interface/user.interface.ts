enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
interface IUser {
  readonly id?: string;
  readonly email?: string;
  readonly telephone?: string;
  readonly username?: string;
  readonly password?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly role?: UserRole;
  readonly lastLogin?: Date;
  readonly photo?: { path: string };
}
export { IUser, UserRole };
