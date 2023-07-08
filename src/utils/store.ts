import { writable } from "svelte/store";

import type { IExperience, IProject } from "./interfaces";

import { experiences } from "./content";

export const focusedContent = writable<IExperience & IProject>(experiences[0])