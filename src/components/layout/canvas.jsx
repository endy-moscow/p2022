import { Preload } from '@react-three/drei'
import useRouterStore from '@/helpers/store'
import { Canvas } from '@react-three/fiber'

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
