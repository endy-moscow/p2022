
import { Preload, ContactShadows, SpotLight, Html } from '@react-three/drei'
import useRouterStore from '@/helpers/store'
import { Canvas, useFrame } from '@react-three/fiber'
import CameraControls from "../canvas/cameraControls"

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>{progress} % loaded</Html>
  )
}

function LCanvas({ children }) {
  const dom = useRouterStore((state) => state.dom)
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      mode='concurrent'
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Preload all/>
      {children}
      
    </Canvas>
  )
}

export default LCanvas
