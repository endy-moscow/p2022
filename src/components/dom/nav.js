import { useRef } from "react"

export const Nav = () => {
  // const isProjectShow = useSceneStore(state => state.isProjectShow)
  // const focusFirstProject = useSceneStore(state => state.focusFirstProject)
  // const focusSecondProject = useSceneStore(state => state.focusSecondProject)
  // const focusThirdProject = useSceneStore(state => state.focusThirdProject)
  const ref = useRef()
  return (
    <nav className=''>
      <ol>
        <li onClick={() => console.log(1)} className='text-s'>First Project</li>
        <li onClick={() => console.log(2)} className='text-s'>Second Project</li>
        <li onClick={() => console.log(3)} className='text-s'>Third Project</li>
      </ol>
    </nav>
  )
}

