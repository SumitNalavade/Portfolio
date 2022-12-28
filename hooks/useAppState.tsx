import create from "zustand";

import { IProject } from "../utils/interfaces";

interface AppState {
  projects: IProject[]
  setProjects: (projects: IProject[]) => void
}

const useAppStore = create<AppState>()((set) => ({
  projects: [],
  setProjects: (projects) => set((state) => ({ projects })),
}));

export default useAppStore;