const Lights = () => {
  return(
    <>

      <ambientLight intensity={0.1} />
      
      <directionalLight
        intensity={0.5}
        position={[2, 2, 0]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <pointLight
        castShadow
        intensity={0.8}
        args={[0xff0000, 1, 100]}
        position={[1, 1, 1]}
      />

    </>
  )
}
export default Lights
