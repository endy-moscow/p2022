import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// Camera store
export const useCameraStore = create((set) => ({

  actualCamPosX: 0,
  actualCamPosY: 0,
  actualCamPosZ: 0,

  targetPosX: 0,
  targetPosX: 0,
  targetPosX: 0,

  incCamPosZ: () => set((state) => ({ actualCamPosZ: state.actualCamPosZ-10 })),
  decCamPosZ: () => set((state) => ({ actualCamPosZ: state.actualCamPosZ+10 })),

  focusFirstProject: () => set((state) => ({ actualCamPosZ: 10 })),
  focusSecondProject: () => set((state) => ({ actualCamPosZ: 110 })),
  focusThirdProject: () => set((state) => ({ actualCamPosZ: 210 }))
}))


// Router Store
const useRouterStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useRouterStore
