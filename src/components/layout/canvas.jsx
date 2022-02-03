import { Preload, CameraShake } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { MotionCanvas } from 'framer-motion-3d'
import { MotionConfig } from "framer-motion";
import { transition } from '@/settings'
import Shake from '@/helpers/cameraShake';

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  
  return (
    <MotionCanvas 
      dpr={[1, 2]} 
      camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
      shadows
      mode='concurrent'
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <MotionConfig transition={transition}>
        <Preload all />
        <Shake intensity={0}/>
        {children}
      </MotionConfig>
    </MotionCanvas>
  )
}

export default LCanvas
