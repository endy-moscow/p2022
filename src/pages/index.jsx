
import dynamic from 'next/dynamic'
import { Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'

const Grid = dynamic(() => import('@/components/canvas/Images'), {
  ssr: false,
})

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const DOM = (state) => {
  function handleClick()  {
    return (
      console.log(state)
    )
  }
  console.log(state)
  return (
    <button onClick={() => handleClick()} className='text-xl blue'>button</button>
  )
}

function whileHover(event, info) {
  const x = 1.6
  console.log ('Hover!')
  return {
    scale: x
  }
}



// canvas components goes here
const R3F = () => {
  return (
    <>
      <Grid/>
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
