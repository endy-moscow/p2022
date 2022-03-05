import { useRouterStore } from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useRouterStore.setState({ dom: ref })
  }, [])
  return (
    <div
      className='absolute top-0 left-0 w-screen overflow-hidden dom'
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Dom
