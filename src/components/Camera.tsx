import { CameraControls as CameraControlsType, CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export const Camera = () => {
  const controls = useRef<CameraControlsType>(null);

  const intro = async () => {
    controls.current?.dolly(-22);
    controls.current!.smoothTime = 1.6;
    controls.current?.dolly(22, true);
  };

  useEffect(() => {
    intro();
  }, []);

  return <CameraControls ref={controls} />;
};
