import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'
import randomWord from 'random-words'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/fonts/Inter-Bold.woff', fontSize: 1.0, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  useEffect(() => {
    if (hovered)
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion)
    }
  })
  return (
    <Billboard ref={ref} >
      <Text onPointerOver={over} onPointerOut={out} {...props} {...fontProps}> 
        {children}
      </Text>
    </Billboard>
  )
}

function Cloud({ count, radius }) {
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
    return temp
  }, [count, radius])
  return (
    words.map(([pos, word], index) => ( <Word key={index} position={pos}> {word} </Word> ))  
  )
}

export default function WorldCloud() {
  const ref = useRef()
  useFrame(() => {
    // ref.current.rotation.x += 0.01
  })
  return (
    <group ref={ref} position={[0,0,0]}>
      <fog attach="fog" args={['#000000', 0, 80]} />
      <Cloud count={9} radius={9} />
    </group>
  )
}
