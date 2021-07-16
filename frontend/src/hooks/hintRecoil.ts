import { HintDTO } from '../usecases/hint/dtos/HintDTO';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

const hintsAtom = atom<HintDTO[]>({
  key: 'hints',
  default: []
});

export const useGetHints = () => {
  return useRecoilValue(hintsAtom);
}

export const useSetHints = () => {
  return useSetRecoilState(hintsAtom);
}

export const useHintsState = () => {
  return useRecoilState(hintsAtom);
}
