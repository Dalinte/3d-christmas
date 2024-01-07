import { MathUtils } from 'three';
import { Environment, Float, RenderTexture, Text, useFont } from '@react-three/drei';
import { ChristmasModel } from './ChristmasModel';

export const NewYearText = () => {
  return (
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
  );
};

useFont.preload('fonts/Poppins-Black.ttf');
