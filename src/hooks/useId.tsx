import { create } from "zustand";

interface Props {
  id?: number;
  setId: (id: number) => void;
}

export const useId = create<Props>((set) => ({
  id: undefined,
  setId: (id: number) => set(() => ({ id })),
}));
