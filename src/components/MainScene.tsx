import { CameraControls, Environment } from '@react-three/drei';
import { ChristmasModelGenerated } from './ChristmasModel.generated';
import { MathUtils } from 'three';
import { NewYearText } from './NewYearText';
import { ReflectorFloor } from './ReflectorFloor';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';
import { cameraViewAtom } from '../store/cameraView';

export const MainScene = () => {
  const christmasModelCameraMesh = useRef();
  const cameraView = useAtomValue(cameraViewAtom);
  const cameraControls = useRef<CameraControls>(null);

  const intro = () => {
    cameraControls.current?.dolly(-22);
    cameraControls.current!.smoothTime = 1.6;
    cameraControls.current?.dolly(22, true);
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    if (cameraView === 'newYearModel') {
      changeCameraViewToChristmasModel();
    }
  }, [cameraView]);

  const changeCameraViewToChristmasModel = () => {
    if (christmasModelCameraMesh?.current) {
      cameraControls.current!.smoothTime = 0.8;
      cameraControls?.current?.fitToBox(christmasModelCameraMesh?.current, true);
    }
  };

  return (
    <>
      <CameraControls ref={cameraControls} />;
      <NewYearText />
      <group rotation-y={MathUtils.degToRad(-25)} position-x={3.1}>
        <ChristmasModelGenerated scale={1.4} />
        <mesh ref={christmasModelCameraMesh}>
          <boxGeometry args={[3, 1, 2]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group>
      <ReflectorFloor />
      <Environment preset={'sunset'} />
      <EffectComposer>
        <Bloom mipmapBlur intensity={1} />
      </EffectComposer>
    </>
  );
};
