export type Id = string;
export type Name = string;
export type Email = string;
export type Password = string;
export type CompanyName = string;

export type RoleType = 'admin' | 'viewer';

export const Role: Record<string, RoleType> = {
  ADMIN: 'admin',
  VIEWER: 'viewer',
} as const;
