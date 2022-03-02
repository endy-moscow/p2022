import Shake from "@/components/canvas/cameraShake"
import { PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useSceneStore } from "@/helpers/store"
import { Vector3 } from "three"

function MainCamera() {

  // Camera position from store
  const cameraPosX = useSceneStore(state => state.cameraPosX)
  const cameraPosY = useSceneStore(state => state.cameraPosY)
  const cameraPosZ = useSceneStore(state => state.cameraPosZ)
  const cameraPosV3 = new Vector3( cameraPosX, cameraPosY, cameraPosZ )
  
  const cameraRef = useRef()  // Camera reference

  useFrame(() => {
    cameraRef.current.position.lerp( cameraPosV3, 0.04)
  })
  return <PerspectiveCamera ref={cameraRef} position={cameraPosV3} makeDefault />
}

export default function CameraControls() {
  return(
    <>
      <MainCamera/> 
      <Shake/>
    </>
  )
}
