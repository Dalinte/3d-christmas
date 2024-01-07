import {
  CameraControls,
  Environment,
  Float,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
} from '@react-three/drei';
import type { CameraControls as CameraControlsType } from '@react-three/drei';
import { ChristmasModel } from './ChristmasModel';
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
        anchorY={'bottom'}
      >
        HAPPY {'\n'} NEW YEAR
        <meshBasicMaterial>
          <RenderTexture attach={'map'}>
            <color attach={'background'} args={['#fff']} />
            <Environment preset={'sunset'} />
            <Float floatIntensity={4} rotationIntensity={5}>
              <ChristmasModel
                scale={5}
                rotation-y={MathUtils.degToRad(-25)}
                rotation-x={MathUtils.degToRad(40)}
                position={[2, -0.5, 0]}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <group rotation-y={MathUtils.degToRad(-25)} position-x={3.1}>
        <ChristmasModel scale={1.4} />
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          transparent
          opacity={0.5}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
          mirror={1}
        />
      </mesh>
      <Environment preset={'sunset'} />
    </>
  );
};
