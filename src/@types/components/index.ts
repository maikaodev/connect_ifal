import { Dispatch, SetStateAction } from 'react';

export interface SettingsProps {
  handleChangeTheme: (value: string) => void;
  currentTheme: string;
  hasUserPhoto: boolean;
  handleHiddenUserPhoto: () => void;
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
}

