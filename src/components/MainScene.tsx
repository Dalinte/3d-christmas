import { Environment } from '@react-three/drei';
import { ChristmasModel } from './ChristmasModel';
import { MathUtils } from 'three';
import { NewYearText } from './NewYearText';
import { ReflectorFloor } from './ReflectorFloor';
import { Camera } from './Camera';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

export const MainScene = () => {
  return (
    <>
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
    </>
  );
};
