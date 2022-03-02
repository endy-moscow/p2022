import create from 'zustand'

// Scene store
export const useSceneStore = create((set) => ({

  // Camera position
  cameraPosX: 0,
  cameraPosY: 0,
  cameraPosZ: 0,
  
  // Visability
  isFirstProjectShow: false,
  isSecondProjectShow: false,
  isThirdProjectShow: false,

  // Project
  focusFirstProject: () => set(() => ({
    isFirstProjectShow: true,
    isSecondProjectShow: false,
    isThirdProjectShow: false,

  })),
  focusSecondProject: () => set(() => ({ 
    isFirstProjectShow: false,
    isSecondProjectShow: true,
    isThirdProjectShow: false,
  })),
  focusThirdProject: () => set(() => ({
    isFirstProjectShow: false,
    isSecondProjectShow: false,
    isThirdProjectShow: true,
  })),

}))

// Router Store
const useRouterStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useRouterStore
