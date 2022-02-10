// import * as THREE from "three"
import { Flex, Box, useReflow} from '@react-three/flex'
import dynamic from 'next/dynamic'
<<<<<<< HEAD
import { Scroll, ScrollControls, useScroll } from '@react-three/drei'
=======
import { Plane, Scroll, ScrollControls, useScroll, SpotLight } from '@react-three/drei'
>>>>>>> 9bdd0e8a717c2e59f0e42457e46e665d286fab73
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
// import Images from '@/components/canvas/Images'

const Images = dynamic(() => import('@/components/canvas/Images'), {
  ssr: false,
})

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})



const DOM = () => {
  return (
    <div className='text-xl blue'>div</div>
  )
}

function whileHover(event, info) {
  const x = 1.6
  console.log ('Hover!')
  return {
    scale: x
  }
}

const Grid = () => {
  const { viewport } = useThree();
  const data = useScroll()
  const ref = useRef()
  return(
    <>
      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={1} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} >
        
        <Scroll >
          <Images/>
        </Scroll>
        
        <Scroll html >
          <h1>all</h1>
          <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
          <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
          <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
          <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
            her
            <br />
            mes.
          </h1>
        </Scroll>
      </ScrollControls>
    </>
  )
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
