import { useRef, useEffect } from 'react'
import { Preload, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRouterStore } from '@/helpers/store'
import { Canvas } from '@react-three/fiber'

const LControl = () => {
  const dom = useRouterStore((state) => state.dom)
  const control = useRef(null)
  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}

function LCanvas({ children }) {
  const dom = useRouterStore((state) => state.dom)
  return (
    <Canvas
      dpr={[1, 2]}
      colorManagement
      shadowMap
      mode='concurrent'
      onCreated={(state) => state.events.connect(dom.current)}>
      <LControl/>
      <Preload all/>
      <PerspectiveCamera  position={[0,0,35]} makeDefault/>

      {children}
    </Canvas>
  )
}
export default LCanvas
