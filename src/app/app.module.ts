import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableMaterialAngularComponent } from './components/table-material-angular/table-material-angular.component';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarMaterialAngularComponent } from './components/toolbar-material-angular/toolbar-material-angular.component';
import { SearchAddressComponent } from './components/search-address/search-address.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperMaterialAngularComponent } from './components/stepper-material-angular/stepper-material-angular.component';
import { ExpansionMaterialAngularComponent } from './components/expansion-material-angular/expansion-material-angular.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ListEnderecoComponent } from './components/list-endereco/list-endereco.component';
@NgModule({
    declarations: [
        AppComponent,
        TableMaterialAngularComponent,
        ToolbarMaterialAngularComponent,
        SearchAddressComponent,
        StepperMaterialAngularComponent,
        ExpansionMaterialAngularComponent,
        AppHomeComponent,
        ListEnderecoComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatStepperModule,
        MatInputModule,
        MatExpansionModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
