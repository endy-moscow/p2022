import { CameraShake } from "@react-three/drei"

const config = {
  maxYaw: 0.1, // Max amount camera can yaw in either direction
  maxPitch: 0.1, // Max amount camera can pitch in either direction
  maxRoll: 0.1, // Max amount camera can roll in either direction
  yawFrequency: 0.1, // Frequency of the the yaw rotation
  pitchFrequency: 0.1, // Frequency of the pitch rotation
  rollFrequency: 0.1, // Frequency of the roll rotation
  decay: false, // should the intensity decay over time
  decayRate: 0.05, // if decay = true this is the rate at which intensity will reduce at
  controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
}

const Shake = () => {
  return <CameraShake intensity={1} {...config} />
}

export default Shake
