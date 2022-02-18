import { useFrame, useThree } from "@react-three/fiber"
import { useCameraStore, useProjectStore } from '@/helpers/store'
import { useRef } from "react"

export const Nav = () => {

  const isProjectShow = useCameraStore(cameraState => cameraState.isProjectShow)
  const projectName = useProjectStore(state => state.projectName)
  const setProjectName = useProjectStore(state => state.setProjectName)

  const focusFirstProject = useCameraStore(cameraState => cameraState.focusFirstProject)
  const focusSecondProject = useCameraStore(cameraState => cameraState.focusSecondProject)
  const focusThirdProject = useCameraStore(cameraState => cameraState.focusThirdProject)
  
  const ref = useRef()

  const selectProject = () => {
    focusFirstProject()
    
    setProjectName(ref.current)
    console.log(projectName)
  }
  return (
    <>
      <button ref={ref} onClick={() => selectProject()}> TEST </button><br/>
      <button onClick={() => focusFirstProject()} className='text-xl blue'>First Project {focusFirstProject ? 'currently' : none} </button><br/>
      <button onClick={() => focusSecondProject()} className='text-xl blue'>Second Project</button><br/>
      <button onClick={() => focusThirdProject()} className='text-xl blue'>Third Project</button>
    </>
  )
}

