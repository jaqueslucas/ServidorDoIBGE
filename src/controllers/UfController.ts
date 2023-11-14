import { ufs } from "./dados"

import type { UfProps } from "../types"

export const findUf = (callback: (uf: UfProps) => boolean): UfProps | undefined => ufs.find(callback)
