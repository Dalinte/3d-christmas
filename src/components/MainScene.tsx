import { Environment, OrbitControls, Text } from '@react-three/drei';
import { ChristmasModel } from './ChristmasScene';
import { MathUtils } from 'three';

export const MainScene = () => {
  return (
    <>
      <OrbitControls />
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
