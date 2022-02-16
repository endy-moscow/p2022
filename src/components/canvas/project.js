import * as THREE from "three"
import { Sphere, Image, Scroll, ScrollControls, useScroll, Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/imageData"
import Grid from '@/components/canvas/grid'
import { useCameraStore } from '@/helpers/store'

const Project = () => { 

  // THREE state
  const camera = useThree((state) => state.camera)

  // Scroll data
  const scrollData = useScroll()
  
  // Grid
  const grid = useRef()

  return(
    <>
      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={1} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false} >
        <Sphere/>
        <Scroll>
          <Grid/>
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
export default Project
