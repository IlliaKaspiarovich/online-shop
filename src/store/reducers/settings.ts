import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
  themeMode: ThemeMode
}

const initialState: SettingsState = {
  themeMode: 'light'
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { toggleThemeMode } = settingsSlice.actions
export default settingsSlice.reducer
