import Shake from "@/components/canvas/cameraShake"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useSceneStore } from "@/helpers/store"
import { Vector3 } from "three"

function MainCamera() {

  const cameraPosX = useSceneStore(state => state.cameraPosX)
  const cameraPosY = useSceneStore(state => state.cameraPosY)
  const cameraPosZ = useSceneStore(state => state.cameraPosZ)

  const cameraPosV3 = new Vector3( cameraPosX, cameraPosY, cameraPosZ )

  const cameraRef = useRef()

  useFrame(() => {

    cameraRef.current.position.lerp( cameraPosV3, 0.04)
    
  })
  return <PerspectiveCamera ref={cameraRef} position={cameraPosV3} makeDefault/>
}

export default function CameraControls() {
  return(
    <>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <MainCamera/> 
      <Shake/>
    </>
  )
}
