import { FC } from 'react';
import { useAtom } from 'jotai';
import { cameraViewAtom } from '../store/cameraView';

export const OpenLettersButton: FC = () => {
  const [cameraView, setCameraView] = useAtom(cameraViewAtom);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500 ${cameraView !== 'home' && 'opacity-0'}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => {
            setCameraView('newYearModel');
          }}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          OPEN A LETTERS
        </button>
      </section>
    </div>
  );
};
