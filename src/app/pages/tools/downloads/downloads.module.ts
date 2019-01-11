import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadsComponent } from './downloads.component';
import { DownloadsRoutingModule } from './downloads-routing.module';
import { ModulesModule } from '../../../modules/modules.module';
import { ToolsModule } from '../tools.module';

@NgModule({
  imports: [
    CommonModule,
    DownloadsRoutingModule,
    ModulesModule,
    ToolsModule
  ],
  declarations: [DownloadsComponent]
})
export class DownloadsModule { }
