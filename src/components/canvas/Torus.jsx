import useRouterStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Torus } from '@react-three/drei'

const TorusComponent = ({ route }) => {
  const router = useRouterStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
      mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
    }
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <Torus
        position={[ 0, 0, -100 ]}
        ref={mesh}
        onClick={() => router.push(route)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
        receiveShadow castShadow >
        <meshBasicMaterial attach="material" color="hotpink" receiveShadow castShadow />
      </Torus>
    </>
  )
}
export default TorusComponent
