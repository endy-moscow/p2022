import useRouterStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Torus } from '@react-three/drei'


const TorusComponent = ({ route }) => {
  const router = useRouterStore((s) => s.router)
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const opacity = useState(0.5)
  useFrame((state, delta) => {
      mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
    }
  )
  return (
    
      <Torus
        position={[ 0, 0, 0 ]}
        ref={mesh}
        onClick={() => router.push('/project')}
        onPointerOver={() => console.log(111)}
        onPointerOut={() => console.log(222)}
        scale={hovered ? 1.1 : 1}
        receiveShadow
        castShadow >
        <meshStandardMaterial attach="material" color={[0,0,0]} />
      </Torus>
    
  )
}
export default TorusComponent
