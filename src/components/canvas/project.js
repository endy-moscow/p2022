import * as THREE from "three"
import { useGLTF, Cylinder, Sphere, Image, Scroll, ScrollControls, useScroll, Html, PresentationControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/data"
import Grid from '@/components/canvas/grid'
import { useCameraStore, useProjectStore } from '@/helpers/store'
import Tube from "@/resources/Tube"
import Torus from "@/components/canvas/Torus"

const Project = () => { 

  const isProjectShow = useCameraStore(state => state.isProjectShow)
  
  const setFirstProjectShow = useCameraStore(state => state.setFirstProjectShow)
  const setFirstProjectHide = useCameraStore(state => state.setFirstProjectHide)

  useFrame(() => {
    // console.log(isProjectShow)
  })
  const handleClick = (e) =>  {
    setFirstProjectHide()
    console.log()
  }
  
  return(
    <>
      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={1} // Friction, higher is faster (default: 4)
        >
        <Scroll>
          <Html center>
            <div className="flex p-2">
              <button 
                className="p-2"
                onClick={() => handleClick()}>
                Hide
              </button>
              <button
                className="p-2"
                onClick={() => setFirstProjectShow()}>
                Show
              </button>
            </div>
          </Html>
          <Tube />
          <PresentationControls>
            { isProjectShow ? <Sphere position={[ 0, 0, 0 ]}/> : <></> }
          </PresentationControls>
          <PresentationControls>
            { isProjectShow ? <Torus /> : <></> }
          </PresentationControls>
          <PresentationControls>
            { isProjectShow ? <Cylinder position={[ 0, 0, -200 ]} /> : <></> }
          </PresentationControls>
          {/* <Grid/> */}
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default Project
