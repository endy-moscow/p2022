import Shake from "@/components/canvas/cameraShake"
import { PerspectiveCamera, OrbitControls, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import useRouterStore, { useCameraStore } from "@/helpers/store"
import { Vector3 } from "three"

function Camera() {

  // Camera position from store
  const cameraPosX = useCameraStore(cameraState => cameraState.cameraPosX)
  const cameraPosY = useCameraStore(cameraState => cameraState.cameraPosY)
  const cameraPosZ = useCameraStore(cameraState => cameraState.cameraPosZ)
  const cameraPosV3 = new Vector3( cameraPosX, cameraPosY, cameraPosZ )


  const cameraRef = useRef()
  
  useFrame(() => {
    cameraRef.current.position.lerp( cameraPosV3, 0.04)
  })

  return <PerspectiveCamera ref={cameraRef} makeDefault />
}


export default function CameraControls() {
  // Camera position from store
  const cameraPosX = useCameraStore(cameraState => cameraState.cameraPosX)
  const cameraPosY = useCameraStore(cameraState => cameraState.cameraPosY)
  const cameraPosZ = useCameraStore(cameraState => cameraState.cameraPosZ)
  
  
  
  // Router store
  const router = useRouterStore()

  const cameraPos = new Vector3( cameraPosX, cameraPosY, cameraPosZ )
  
  
  useFrame(() => {
    // cameraRef.current.position.lerp( cameraPos, 0.04)
    // cameraRef.current.position.setlerp(cameraPos, 0.1)
    // cameraRef.current.position.set(cameraPos.lerp(targetPos, 0.1))
    // cameraRef.current.position.lerp(prevCamPos, 0.1)
    // cameraRef.current.updateMatrixWorld()
    // cameraRef.current.position.set(cameraPosX, cameraPosY, cameraPosZ)
  })
   // Side effect
   useEffect(() => {
    console.log( 
      'cameraPosX:', cameraPosX,
      'cameraPosY:', cameraPosY,
      'cameraPosZ:', cameraPosZ
      )
  });
  return(
    <>
      <Camera/> 
      <Shake/>
    </>
  )
}
