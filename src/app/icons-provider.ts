import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  LockFill,
  SettingOutline,
  VerticalRightOutline,
  VerticalLeftOutline
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [
  MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, LockFill,
  SettingOutline, VerticalRightOutline,
  VerticalLeftOutline
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
