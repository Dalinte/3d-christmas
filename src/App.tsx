import { Canvas } from '@react-three/fiber';
import { MainScene } from './components/MainScene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 8], fov: 42 }}>
      <color attach="background" args={['#171720']} />
      <fog attach="fog" args={['#171720', 10, 30]} />
      <MainScene />
      <EffectComposer>
        <Bloom mipmapBlur intensity={1} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
