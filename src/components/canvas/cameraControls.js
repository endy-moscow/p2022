import Shake from "@/helpers/cameraShake"
import { PerspectiveCamera, OrbitControls, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


export default function CameraControls() {
  const camera = useRef()
  const scroll = useScroll()
  useFrame(() => {
    console.log(scroll) // null
    camera.current.position.z
  })
  return(
    <>
      <PerspectiveCamera ref={camera} position={[0, 1, 10]} makeDefault />
      <Shake/>
      <OrbitControls
        enableZoom={true}
        zoomSpeed={2}
        rotateSpeed={0}
       
        keys={{
          LEFT: 'ArrowLeft', //left arrow
          UP: 'ArrowUp', // up arrow
          RIGHT: 'ArrowRight', // right arrow
          BOTTOM: 'ArrowDown', // down arrow
          LEFT: 'a', //left arrow
          UP: 'w', // up arrow
          RIGHT: 'd', // right arrow
          BOTTOM: 's' // down arrow
        }}
      />
    </>
  )
}
