import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { EscolaComponent } from './escola/escola.component';
import {TreeTableModule} from 'primeng/treetable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeNode} from 'primeng/api';
import {SplitterModule} from 'primeng/splitter';
import { TurmaComponent } from './turma/turma.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    TreeTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SplitterModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
