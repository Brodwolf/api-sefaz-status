import { EnumSefazApiStatus } from '../enum/EnumSefazApiStatus'

export interface SefazInstanceConfig {
  url: string;
  colorMapping: colorMapping;
}

export interface colorMapping {
  [key: string]: EnumSefazApiStatus;
}
