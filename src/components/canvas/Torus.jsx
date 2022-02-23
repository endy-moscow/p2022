import useRouterStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Torus } from '@react-three/drei'


const TorusComponent = ({ route }) => {
  const router = useRouterStore((s) => s.router)
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  useFrame((state, delta) => {
      mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null,
      console.log(route, router)
    }
  )
  return (
    <>
      <Torus
        position={[ 0, 0, -100 ]}
        ref={mesh}
   
        onClick={() => router.push('/123')}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
        receiveShadow
        castShadow >
        <meshStandardMaterial attach="material" color="white"/>
      </Torus>
    </>
  )
}
export default TorusComponent
