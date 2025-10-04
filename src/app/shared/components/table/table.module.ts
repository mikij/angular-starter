import { NgModule } from '@angular/core';

import {
  ZardTableBodyComponent,
  ZardTableCaptionComponent,
  ZardTableCellComponent,
  ZardTableComponent,
  ZardTableHeadComponent,
  ZardTableHeaderComponent,
  ZardTableRowComponent,
} from './table.component';

const TABLE_COMPONENTS = [
  ZardTableComponent,
  ZardTableHeaderComponent,
  ZardTableBodyComponent,
  ZardTableRowComponent,
  ZardTableHeadComponent,
  ZardTableCellComponent,
  ZardTableCaptionComponent,
];

@NgModule({
  imports: [...TABLE_COMPONENTS],
  exports: [...TABLE_COMPONENTS],
})
export class ZardTableModule {}
