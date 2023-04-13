import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"

export default function model() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <Experience />
    </Canvas>
  )
}
