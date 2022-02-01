import dynamic from 'next/dynamic'
import * as THREE from "three"
import { Flex, Box, useReflow} from '@react-three/flex'
import { Plane, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { LayoutCamera, motion as motion3d } from 'framer-motion-3d'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { useMotionValue } from 'framer-motion'
import { useRef, useEffect, useMemo, useState } from 'react'
import create from 'zustand'

const Images = dynamic(() => import('@/components/canvas/Images'), {
  ssr: false,
})

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const DOM = () => {
  return (
    <div>div</div>
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
  const { viewport } = useThree();
  const reflow = useReflow()
  const data = useScroll()
  const ref = useRef()
  // useFrame((state, delta) => {
  //   const action = actions['Take 001']
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - scroll.offset
  //   action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  //   state.camera.lookAt(0, 0, 0)
  // })
  useFrame(({ data, clock }) => {
    // ref.current.scale.x = 1 + Math.sin(clock.getElapsedTime()) * 0.8
    // groupRef.current.position.lerp(vec.set(0, state.top, 0), 0.1)
    // console.log(data, clock.elapsedTime)
    // Inform flexbox
    // reflow()
  })
  return (
    <>
      <ScrollControls
        pages={3} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={4} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} >
        <Images/>
        <Scroll html style={{ width: '100%' }}>
          <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
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
