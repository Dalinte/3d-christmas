import { MainScene } from './components/MainScene';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OpenLettersButton } from './components/ShowMoreButton';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 42 }}>
        <color attach="background" args={['#171720']} />
        <fog attach="fog" args={['#171720', 10, 30]} />
        <Suspense>
          <MainScene />
        </Suspense>
      </Canvas>
      <OpenLettersButton
        onClick={() => {
          console.log(111);
        }}
      />
    </>
  );
}

export default App;
