import { MainScene } from './components/MainScene';
import { Canvas } from '@react-three/fiber';
import {Suspense} from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 8], fov: 42 }}>
      <color attach="background" args={['#171720']} />
      <fog attach="fog" args={['#171720', 10, 30]} />
      <Suspense>
        <MainScene />
      </Suspense>
    </Canvas>
  );
}

export default App;
