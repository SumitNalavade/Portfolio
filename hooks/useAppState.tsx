import create from "zustand";

import { IProject } from "../utils/interfaces";

interface AppState {
  projects: IProject[]
}

const useAppStore = create<AppState>()((set) => ({
  projects: []
}));

export default useAppStore;