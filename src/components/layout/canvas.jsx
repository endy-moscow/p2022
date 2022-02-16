
import { Preload, ContactShadows, SpotLight, Html } from '@react-three/drei'
import useStore from '@/helpers/store'
import { Canvas, useFrame } from '@react-three/fiber'
import CameraControls from "../canvas/cameraControls"

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>{progress} % loaded</Html>
  )
}

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
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
