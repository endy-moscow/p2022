import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// Camera store
export const useCameraStore = create((set) => ({

  // Camera x, y, z
  cameraPosX: 0,
  cameraPosY: 0,
  cameraPosZ: 10,


  // Project Visible
  isProjectShow: false,
  setFirstProjectShow: () => set((state) => ({ isProjectShow: true })),
  setFirstProjectHide: () => set((state) => ({ isProjectShow: false })),

  // Project
  focusFirstProject: () => set((state) => ({ cameraPosZ: 10 })),
  focusSecondProject: () => set((state) => ({ cameraPosZ: -90 })),
  focusThirdProject: () => set((state) => ({ cameraPosZ: -190 })),
}))

export const useProjectStore = create((set) => ({ 
  
  // Handle typing project name
  projectId: null,
  projectName: '',
  setProjectName: (name) => set((name) => ({ projectName: name })),

  projectPosX: 0,
  projectPosY: 0,
  projectPosZ: 0,


  // Project Visible
  isProjectShow: false,
  setFirstProjectShow: () => set((state) => ({ isProjectShow: true })),
  setFirstProjectHide: () => set((state) => ({ isProjectShow: false })),

  // Project
  focusFirstProject: () => set((state) => ({ camPosZ: 10 })),
  focusSecondProject: () => set((state) => ({ camPosZ: -90 })),
  focusThirdProject: () => set((state) => ({ camPosZ: -190 })),
}))
// Router Store
const useRouterStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useRouterStore
