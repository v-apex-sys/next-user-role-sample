import { atom, selector } from 'recoil';
import { RECOIL_ATOMS_KEYS } from '../keys';
import { CurrentUserIDState, CurrentUserNameState } from './types';

export const currentUserIDState = atom<CurrentUserIDState>({
  key: RECOIL_ATOMS_KEYS.CURRENT_USER_ID,
  default: 1,
});

export const currentUserNameQuery = selector<CurrentUserNameState>({
  key: RECOIL_ATOMS_KEYS.CURRENT_USER_NAME,
  get: async ({ get }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${get(currentUserIDState)}`,
    );
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await response.json();
    return data.name;
  },
});
