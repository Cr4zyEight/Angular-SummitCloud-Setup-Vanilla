import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData, DatePipe } from '@angular/common';
import { FileSaverModule } from 'ngx-filesaver';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbInputModule,
  NbCardModule,
  NbMenuModule,
  NbWindowModule,
  NbContextMenuModule,
  NbUserModule,
  NbIconModule,
  NbPopoverModule,
  NbDatepickerModule,
  NbChatModule,
  NbToastrModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbDateFnsDateModule } from '@nebular/date-fns';

registerLocaleData(localeDe);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    FileSaverModule,
    NbThemeModule.forRoot(),
    NbDateFnsDateModule.forRoot({ format: 'MM/dd/yyyy' }),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbChatModule,
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbContextMenuModule,
    NbUserModule,
    NbIconModule,
    FontAwesomeModule,
    NbPopoverModule,
    NbToastrModule.forRoot(),
    NbTreeGridModule,
  ],
  schemas: [],
  declarations: [AppComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
