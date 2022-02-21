import * as THREE from "three"
import { Cylinder, Sphere, Scroll, ScrollControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useSceneStore } from '@/helpers/store'
import Torus from "@/components/canvas/torus"
import CameraControls from "./cameraControls"
import { Perf } from "r3f-perf"

import { motion as motion3d } from "framer-motion"


const Project = () => { 
  
  const isFirstProjectShow = useSceneStore(state => state.isFirstProjectShow)
  const isSecondProjectShow = useSceneStore(state => state.isSecondProjectShow)
  const isThirdProjectShow = useSceneStore(state => state.isThirdProjectShow)

  useFrame(() => {
    {isFirstProjectShow ? console.log(true) : console.log(false) }
  })
  return(
    <>
      <CameraControls/>
      <Perf/>
      <directionalLight 
        intensity={1}
        castShadow 
      />
      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={1} // Friction, higher is faster (default: 4)
        >
        <Scroll>
            { isFirstProjectShow ? <Sphere/> : setTimeout(() => {
                console.log('yo!')
              }, 1000)
            }
            { isSecondProjectShow ? <Torus /> : <></> }
            { isThirdProjectShow ? <Cylinder position={[ 0, 0, -200 ]} /> : <></> }
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default Project
