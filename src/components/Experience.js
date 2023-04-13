import { OrbitControls } from "@react-three/drei"
import Looking from "./Looking"

const Experience = () => {
    return (
        <>
       <OrbitControls enableZoom={false}/> 
       <group position={[0, -1, 0]} rotateX={30} rotateY={3}>
       <Looking />
       </group>
       </>
    )
}

export default Experience;