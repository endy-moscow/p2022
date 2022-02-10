import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Torus } from '@react-three/drei'

const TorusComponent = ({ route }) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <Torus
        ref={mesh}
        onClick={() => router.push(route)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
<<<<<<< HEAD:src/components/canvas/Sphere.jsx
        color={route === '/' ? 'orange' : 'hotpink'}>
        <meshBasicMaterial attach="material" color="hotpink" />
      </Sphere>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
      
=======
        receiveShadow castShadow >
        <meshBasicMaterial attach="material" color="hotpink" receiveShadow castShadow />
      </Torus>
>>>>>>> 9bdd0e8a717c2e59f0e42457e46e665d286fab73:src/components/canvas/Torus.jsx
    </>
  )
}
export default TorusComponent
