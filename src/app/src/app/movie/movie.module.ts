import { ReactiveFormsModule } from "@angular/forms";
import { MovieComponent } from "./component/movie.component";
import { MovieRoutes } from "./movie.routing";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MovieRoutes),
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        MovieComponent
    ],
    exports: [],
    providers: [],
})
export class MovieModule { }