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
      <ambientLight
        intensity={0.1}
      />
      <directionalLight
        intensity={0.5}
        position={[2, 2, 0]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <pointLight
        castShadow
        intensity={0.2}
        args={[0xff0000, 1, 100]}
        position={[1, 1, 1]}
      />
      <ScrollControls
        pages={6} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={1} // Friction, higher is faster (default: 4)
        >
        <Scroll>
            { isFirstProjectShow ? <Sphere receiveShadow castShadow><meshStandardMaterial attach="material" color="white" /></Sphere> : setTimeout(() => {
                console.log('yo!')
              }, 1000)
            }
            { isSecondProjectShow ? <Torus/>  : <></> }
            { isThirdProjectShow ? <Cylinder receiveShadow castShadow position={[ 0, 0, -200 ]}><meshStandardMaterial attach="material" color="white" /></Cylinder> : <></> }
        </Scroll>
      </ScrollControls>
    </>
  )
}
export default Project
