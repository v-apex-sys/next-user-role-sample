export type RECOIL_ATOMS_KEYS_TYPE =
  (typeof RECOIL_ATOMS_KEYS)[keyof typeof RECOIL_ATOMS_KEYS];

export const RECOIL_ATOMS_KEYS = {
  ROLE: 'atom/role',
  ACCOUNT: 'atom/account',
} as const;

export const RECOIL_PERSIST_KEY = 'recoil-persist';
