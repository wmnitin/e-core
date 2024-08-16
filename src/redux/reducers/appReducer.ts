import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, AppConfig, MenuItem } from "../../types";

const initialState: AppState = {
  currentApp: null,
  components: {},
  componentState: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loadApp(state, action: PayloadAction<AppConfig>) {
      state.currentApp = action.payload;
    },
    changeMenu(state, action: PayloadAction<MenuItem[]>) {
      if (state.currentApp) {
        state.currentApp.menuConfig = action.payload;
      }
    },
    loadComponent(
      state,
      action: PayloadAction<{
        name: string;
        version: string;
        component: React.FC;
      }>
    ) {
      const { name, version, component } = action.payload;
      if (!state.components[name]) {
        state.components[name] = {};
      }
      state.components[name][version] = component;
    },
    changeComponentState(
      state,
      action: PayloadAction<{ name: string; version: string; state: any }>
    ) {
      const { name, version, state: componentState } = action.payload;
      if (!state.componentState[name]) {
        state.componentState[name] = {};
      }
      state.componentState[name][version] = componentState;
    },
  },
});

export const { loadApp, loadComponent, changeMenu, changeComponentState } = appSlice.actions;
export default appSlice.reducer;
