import { Canvas } from '@react-three/fiber';
import { MainScene } from './components/MainScene';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={['#171720']} />
      <fog attach="fog" args={['#171720', 10, 30]} />
      <MainScene />
    </Canvas>
  );
}

export default App;
