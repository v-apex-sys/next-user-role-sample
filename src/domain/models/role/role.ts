// export class Role {
//   constructor(private readonly role: string) {}

//   public static readonly ADMIN: Role = new Role('admin');
//   public static readonly VIEWER: Role = new Role('viewer');

//   public getRole(): string {
//     return this.role;
//   }

//   public displayRole(): string {
//     if (this === Role.ADMIN) {
//       return '管理者';
//     }
//     if (this === Role.VIEWER) {
//       return '閲覧者';
//     }
//     return '不明';
//   }

//   public is(role: Role): boolean {
//     return this.role === role.getRole();
//   }
// }

export type RoleType = 'admin' | 'viewer';

export const Role: Record<string, RoleType> = {
  ADMIN: 'admin',
  VIEWER: 'viewer',
} as const;
