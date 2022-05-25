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
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
    LoginComponent
  ],
  imports: [
    ConfirmDialogModule,
    DialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    TreeTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SplitterModule,
    TranslocoRootModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
