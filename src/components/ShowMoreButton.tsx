import { FC } from 'react';

interface OpenLettersButton {
  onClick(): void;
}

export const OpenLettersButton: FC<OpenLettersButton> = ({ onClick }) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={onClick}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-600 cursor-pointer transition-colors duration-500"
        >
          OPEN A LETTERS
        </button>
      </section>
    </div>
  );
};
