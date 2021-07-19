import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const codeAtom = atom<string>({
  key: 'editor',
  default: ''
});

export const useGetCode = () => {
  return useRecoilValue(codeAtom);
}

export const useSetCode = () => {
  return useSetRecoilState(codeAtom);
}

export const useCodeState = () => {
  return useRecoilState(codeAtom);
}
