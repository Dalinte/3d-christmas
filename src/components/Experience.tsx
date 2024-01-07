import {Environment, OrbitControls, Text} from "@react-three/drei";
import {ChristmasScene} from "./ChristmasScene";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Text font={'fonts/Poppins-Black.ttf'} position={[-1.3, -0.5, 1]} lineHeight={0.8} textAlign={'center'}>
          HAPPY {'\n'} NEW YEAR
          <meshBasicMaterial color={'white'}/>
      </Text>
      <ChristmasScene/>
      <Environment preset={"sunset"}/>
    </>
  );
};
