import * as THREE from "three"
import { Preload, ContactShadows, SpotLight } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import Shake from '@/helpers/cameraShake';
import { Canvas, useFrame } from '@react-three/fiber';
import CameraControls from "../canvas/cameraControls";

// const LControl = () => {
//   const dom = useStore((state) => state.dom)
//   const control = useRef(null)
//   useEffect(() => {
//     if (control) {
//       dom.current.style['touch-action'] = 'none'
//     }
//   }, [dom, control])

//   return <OrbitControls ref={control} domElement={dom.current} />
// }

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  const camera = useRef()
  return (
    <Canvas 
      dpr={[1, 2]} 
      shadows
      mode='concurrent'
      onCreated={(state) => state.events.connect(dom.current)}
    > 
        <SpotLight
          position={0, 0, 10}
          distance={50}
          angle={4}
          attenuation={5}
          anglePower={30} // Diffuse-cone anglePower (default: 5)
        />
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
        <Preload all />
        <CameraControls/>
        
        {children}
      
    </Canvas>
  )
}

export default LCanvas
