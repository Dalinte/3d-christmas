import { atom } from 'jotai';

export type CameraView = 'home' | 'newYearModel';

export const cameraViewAtom = atom<CameraView>('home');
