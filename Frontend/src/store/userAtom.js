import {atom} from 'recoil';

export const userAtom = atom({
  key: 'userAtom',
  default: localStorage.getItem('username') || '',
});

export const productsAtom = atom({
  key: 'productsAtom',
  default: [],
});
