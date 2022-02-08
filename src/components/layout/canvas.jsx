import { Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { MotionCanvas } from 'framer-motion-3d'
import { MotionConfig } from "framer-motion";
import { transition } from '@/settings'
import Shake from '@/helpers/cameraShake';
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber';
import useMeasure from 'react-use-measure';

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
        
          <Preload all />
          <Shake />
          <Perf />
          {children}
        
      </Canvas>
    

  )
}

export default LCanvas
