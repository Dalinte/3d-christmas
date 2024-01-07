import { MeshReflectorMaterial } from '@react-three/drei';

export const ReflectorFloor = () => {
  return (
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
  );
};
