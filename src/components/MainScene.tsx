import { CameraControls, Environment, Text } from '@react-three/drei';
import type { CameraControls as CameraControlsType } from '@react-three/drei';
import { ChristmasModel } from './ChristmasScene';
import { MathUtils } from 'three';
import { useEffect, useRef } from 'react';

export const MainScene = () => {
  const controls = useRef<CameraControlsType>(null);

  const intro = async () => {
    controls.current?.dolly(-22);
    controls.current!.smoothTime = 1.6;
    controls.current?.dolly(22, true);
  };

  useEffect(() => {
    intro();
  }, []);

  return (
    <>
      <CameraControls ref={controls} />
      <Text
        font={'fonts/Poppins-Black.ttf'}
        position={[-1.3, -0.5, 1]}
        lineHeight={0.8}
        textAlign={'center'}
        rotation-y={MathUtils.degToRad(25)}
      >
        HAPPY {'\n'} NEW YEAR
        <meshBasicMaterial color={'white'} />
      </Text>
      <group rotation-y={MathUtils.degToRad(-25)} position-x={3.1}>
        <ChristmasModel scale={1.4} />
      </group>
      <Environment preset={'sunset'} />
    </>
  );
};
