import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { MotionCanvas } from 'framer-motion-3d'
import { MotionConfig } from "framer-motion";
import { transition } from '@/settings'


// const LControl = () => {
//   const dom = useStore((state) => state.dom)
//   const control = useRef(null)

//   useEffect(() => {
//     if (control) {
//       dom.current.style['touch-action'] = 'none'
//     }
//   }, [dom, control])
//   // @ts-ignore
//   return <OrbitControls ref={control} domElement={dom.current} />
// }

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
      {/* <LControl /> */}
      <MotionConfig transition={transition}>
        <Preload all />
        {children}
      </MotionConfig>
    </MotionCanvas>
  )
}

export default LCanvas
