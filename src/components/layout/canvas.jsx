
import { Preload, ContactShadows, SpotLight, Html } from '@react-three/drei'
import useRouterStore from '@/helpers/store'
import { Canvas, useFrame } from '@react-three/fiber'
import CameraControls from "../canvas/cameraControls"
import { Suspense } from 'react'

function Loader() {
  return (
    <div className='text-slate-900'></div>
  )
}

function LCanvas({ children }) {
  const dom = useRouterStore((state) => state.dom)
  return (
    <Canvas
      dpr={[1, 2]}
      colorManagement
      shadowMap
      mode='concurrent'
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Preload all/>
        {children}
    </Canvas>
  )
}

export default LCanvas
