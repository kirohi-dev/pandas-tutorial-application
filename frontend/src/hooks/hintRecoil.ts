import { HintDTO } from '../usecases/hint/dtos/HintDTO';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

const hintAtom = atom<HintDTO | null>({
  key: 'hint',
  default: null
});

export const useGetHint = () => {
  return useRecoilValue(hintAtom);
}

export const useSetHint = () => {
  return useSetRecoilState(hintAtom);
}

export const useHintState = () => {
  return useRecoilState(hintAtom);
}
