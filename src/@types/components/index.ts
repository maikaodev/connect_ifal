import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface SettingsProps {
  handleChangeTheme: (value: string) => void;
  currentTheme: string;
  hasUserPhoto: boolean;
  handleHiddenUserPhoto: () => void;
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
}

export interface SocialMediaItemProps {
  children: ReactNode;
  text: string;
  style?: any;
}

export interface SnackbarProps {
  description: string;
  visible: boolean;
  fn: Dispatch<SetStateAction<boolean>>;
}
