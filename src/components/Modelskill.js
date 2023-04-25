import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Skill from "./Skill"

export default function Modelskill() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 85 }}>
      <group position={[0, 0, 0]}>
      <Skill />
      </group>
        <OrbitControls enableZoom={false} autoRotate  enableRotate={false}/>
        <mesh>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      </mesh> 
    </Canvas>
  );
};