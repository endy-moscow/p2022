import * as THREE from "three"
import { Image, Scroll, ScrollControls, useScroll, MeshWobbleMaterial, useTexture, PresentationControls, useCamera, Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import data from "@/components/canvas/imageData"
import { Camera } from "three"

function Images() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  
  const [ cameraPos, update ] = useState(0) // camera state 
  const [ hovered, hover ] = useState(false)
  const scrldata = useScroll()
  
  const pages = scrldata.pages

  const group = useRef()
  const ref = useRef()
  const mesh = useRef()
  const texture = useTexture(data[0])
  const texture1 = useTexture(data[1])
  
  
  function handleClick()  {
    return (
      update(cameraPos + scrldata.scroll.current),
      console.log(group.current.children[0].position.z)
    )
  }
  useFrame((state) => {
    state.camera.position.z = cameraPos + scrldata.offset*100
    update(scrldata.scroll.current*100+10)
    const t = state.clock.getElapsedTime()
    group.current.children[0].rotation.z = (1 + Math.sin(t / 1.5)) / 50
    group.current.children[0].position.z = -2
    // group.current.children[0].position.set( 0,0,0)
    group.current.children[1].material.zoom = 1 + scrldata.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + scrldata.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + scrldata.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + scrldata.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - scrldata.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - scrldata.range(2 / 3, 1 / 3)) / 3
    // ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 1 : 0, hovered ? 0.05 : 0.01)
  })
  return (
    <group ref={group}>
      <PresentationControls
         cursor={true} // Whether to toggle cursor style on drag
         snap={true} // Snap-back to center (can also be a spring config)
         speed={.3} // Speed factor
         zoom={1} // Zoom factor when half the polar-max is reached
         polar={[0, 0 ]} // Vertical limits
         azimuth={[-Infinity, Infinity]} // Horizontal limits
        >
        <mesh
          onPointerOver={() => {hover(true), console.log('onPointerOver')}} 
          onPointerOut={() => {hover(false), console.log('onPointerOut')}}
          onClick={() => handleClick()}
          position={[0, 0, 0]} 
          scale={[w, h , 1]}>
          
          <planeGeometry args={[1, 1, 16, 16]} />
          <meshStandardMaterial map={texture}  ref={ref}/>
        </mesh>
      </PresentationControls>
      <Image url={data[1]} scale={[w/2, h/2, 1]} />
      <Image url={data[2]} scale={[w, h, 1]} position={[-w / 4, 0,  -h * 1]} />
      <Image url={data[3]} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Image url={data[4]} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Image url={data[5]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Image url={data[6]} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Image url={data[7]} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Image url={data[8]} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </group>
  )
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
        
        <Images/>
        
        {/* <Scroll html >
          <h1>all</h1>
          <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
          <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
          <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
          <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
            her
            <br />
            mes.
          </h1>
        </Scroll> */}
      </ScrollControls>
    </>
  )
}

export default Grid
