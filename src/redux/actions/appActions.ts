export const LOAD_APP = "LOAD_APP";
export const LOAD_COMPONENT = "LOAD_COMPONENT";
export const CHANGE_MENU = "CHANGE_MENU";
export const CHANGE_COMPONENT_STATE = "CHANGE_COMPONENT_STATE";

export interface LoadAppAction {
  type: typeof LOAD_APP;
  payload: any;
}

export interface ChangeMenuAction {
  type: typeof CHANGE_MENU;
  payload: any;
}

export interface LoadComponentAction {
  type: typeof LOAD_COMPONENT;
  payload: { name: string; version: string };
}

export interface ChangeComponentStateAction {
  type: typeof CHANGE_COMPONENT_STATE;
  payload: { name: string; version: string; state: any };
}

export type AppActionTypes = LoadAppAction | LoadComponentAction;

export const loadApp = (appConfig: any): LoadAppAction => ({
  type: LOAD_APP,
  payload: appConfig,
});

export const changeMenu = (menuConfig: any): ChangeMenuAction => ({
  type: CHANGE_MENU,
  payload: menuConfig,
});

export const loadComponent = (componentConfig: {
  name: string;
  version: string;
}): LoadComponentAction => ({
  type: LOAD_COMPONENT,
  payload: componentConfig,
});

export const changeComponentState = (componentState: {
  name: string;
  version: string;
  state: any;
}): ChangeComponentStateAction => ({
  type: CHANGE_COMPONENT_STATE,
  payload: componentState,
});
