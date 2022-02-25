import { useSceneStore } from '@/helpers/store'
import { useRef } from "react"

export const Nav = () => {

  const isProjectShow = useSceneStore(state => state.isProjectShow)

  const focusFirstProject = useSceneStore(state => state.focusFirstProject)
  const focusSecondProject = useSceneStore(state => state.focusSecondProject)
  const focusThirdProject = useSceneStore(state => state.focusThirdProject)
  
  const ref = useRef()

  const selectProject = () => {
    focusFirstProject() 
  }
  return (
    <nav className='flex flex-col'>
      <button ref={ref} onClick={() => selectProject()}> TEST </button> 
      <button onClick={() => focusFirstProject()} className='text-xl blue'>First Project {isProjectShow ? 'currently' : <></>} </button>
      <button onClick={() => focusSecondProject()} className='text-xl blue'>Second Project</button>
      <button onClick={() => focusThirdProject()} className='text-xl blue'>Third Project</button>
    </nav>
  )
}

