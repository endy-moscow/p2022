import { useFrame, useThree } from "@react-three/fiber"
import { useCameraStore } from '@/helpers/store'

export const Nav = () => {

  // Target camera position from store
  const targetCamPosX = useCameraStore(cameraState => cameraState.targetCamPosX)
  const targetCamPosY = useCameraStore(cameraState => cameraState.targetCamPosY)
  const targetCamPosZ = useCameraStore(cameraState => cameraState.targetCamPosZ)

  const incCamPosZ = useCameraStore(cameraState => cameraState.incCamPosZ)
  const decCamPosZ = useCameraStore(cameraState => cameraState.decCamPosZ)

  const focusFirstProject = useCameraStore(cameraState => cameraState.focusFirstProject)
  const focusSecondProject = useCameraStore(cameraState => cameraState.focusSecondProject)
  const focusThirdProject = useCameraStore(cameraState => cameraState.focusThirdProject)
  
  // function handleClick()  {
  //   return (
  //     console.log('after:', camPosZ)
  //   )
  // }
  return (
    <>
      <button onClick={() => incCamPosZ()} className='text-xl blue'>inc </button><br/>
      <button onClick={() => decCamPosZ()} className='text-xl blue'>dec</button><br/>
      <button onClick={() => focusFirstProject()} className='text-xl blue'>First Project {focusFirstProject ? 'currently' : none} </button><br/>
      <button onClick={() => focusSecondProject()} className='text-xl blue'>Second Project</button><br/>
      <button onClick={() => focusThirdProject()} className='text-xl blue'>Third Project</button>
    </>
  )
}

