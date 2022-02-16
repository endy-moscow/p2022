import Shake from "@/components/canvas/cameraShake"
import { PerspectiveCamera, OrbitControls, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import useRouterStore, { useCameraStore } from "@/helpers/store"
import { Vector3 } from "three"

export default function CameraControls() {
  // Initial camera position
  const iniCamPosX = 0
  const iniCamPosY = 0
  const iniCamPosZ = 10

  // Router store
  const router = useRouterStore()

  // Camera store
  const actualCamPosX = useCameraStore(cameraState => cameraState.actualCamPosX)
  const actualCamPosY = useCameraStore(cameraState => cameraState.actualCamPosY)
  const actualCamPosZ = useCameraStore(cameraState => cameraState.actualCamPosZ)
  
  const targetCamPosX = useCameraStore(cameraState => cameraState.targetCamPosX)
  const targetCamPosY = useCameraStore(cameraState => cameraState.targetCamPosY)
  const targetCamPosZ = useCameraStore(cameraState => cameraState.targetCamPosZ)


  const cameraRef = useRef()

  const actualCamPos = new Vector3( actualCamPosX, actualCamPosY, actualCamPosZ )
  const targetCamPos = new Vector3( targetCamPosX, targetCamPosY, targetCamPosZ )
  
  useFrame(() => {
    cameraRef.current.position.lerp( actualCamPos, 0.5)
    // cameraRef.current.position.setlerp(actualCamPos, 0.1)
    // cameraRef.current.position.set(actualCamPos.lerp(targetCamPos, 0.1))
    // cameraRef.current.position.lerp(prevCamPos, 0.1)
    // cameraRef.current.updateMatrixWorld()
    // cameraRef.current.position.set(camPosX, camPosY, camPosZ)
  })
   // Side effect
   useEffect(() => {
    console.log( 
      'actualCamPosX:', actualCamPosX,
      'actualCamPosY:', actualCamPosY,
      'actualCamPosZ:', actualCamPosZ
      )
  });
  return(
    <>
   
      <PerspectiveCamera ref={cameraRef} makeDefault />
      <Shake/>
    </>
  )
}
