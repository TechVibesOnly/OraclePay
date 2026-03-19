import { create } from 'zustand';

interface OracleState {
  isLoaded: boolean;
  setLoaded: (loaded: boolean) => void;
}

export const useOracleStore = create<OracleState>((set) => ({
  isLoaded: false,
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}));
