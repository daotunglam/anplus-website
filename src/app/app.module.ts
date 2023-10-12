import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        LayoutModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
