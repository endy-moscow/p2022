import { Preload, useProgress, Html, softShadows} from '@react-three/drei'
import useStore from '@/helpers/store'
import Shake from '@/helpers/cameraShake'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'

// import { MotionCanvas, LayoutCamera } from 'framer-motion-3d'
// import { useMotionValue } from 'framer-motion'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>{progress} % loaded</Html>
  )
}

softShadows()

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  return (
    <Canvas 
      dpr={[1, 2]} 
      camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
      shadows
      mode='concurrent'
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Suspense fallback={<Loader />}>
        {/* <Preload all /> */}
        <Shake />
        
        <Perf />
        {children} 
      </Suspense>
    </Canvas>
  )
}

export default LCanvas
