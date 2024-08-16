export interface MenuItem {
  name: string;
}

export interface ComponentConfig {
  name: string;
  version: string;
  newMenu: MenuItem[];
}

export interface AppConfig {
  menuConfig: MenuItem[];
  components: ComponentConfig[];
}

export interface AppState {
  currentApp: AppConfig | null;
  components: { [key: string]: { [version: string]: React.FC } };
  componentState: { [key: string]: { [version: string]: any } };
}
