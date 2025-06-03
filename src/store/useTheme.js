import { create } from 'zustand'

const useThemeStore = create((set) => ({
  darkMode: false,
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode }))
}))

export default useThemeStore