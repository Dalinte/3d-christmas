import { Environment } from '@react-three/drei';
import { ChristmasModel } from './ChristmasModel';
import { MathUtils } from 'three';
import { NewYearText } from './NewYearText';
import { ReflectorFloor } from './ReflectorFloor';
import { Camera } from './Camera';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';

export const MainScene = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 42 }}>
        <color attach="background" args={['#171720']} />
        <fog attach="fog" args={['#171720', 10, 30]} />
        <Camera />
        <NewYearText />
        <group rotation-y={MathUtils.degToRad(-25)} position-x={3.1}>
          <ChristmasModel scale={1.4} />
        </group>
        <ReflectorFloor />
        <Environment preset={'sunset'} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={1} />
        </EffectComposer>
      </Canvas>
    </>
  );
};
