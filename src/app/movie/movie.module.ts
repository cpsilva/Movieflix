import { ReactiveFormsModule } from "@angular/forms";
import { MovieComponent } from "./component/movie.component";
import { MovieRoutes } from "./movie.routing";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MovieService } from "./service/movie.service";
import { MatCardModule } from "@angular/material/card";
import { MovieDetailComponent } from "./component/movie-details/movie-detail.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MovieRoutes),
        ReactiveFormsModule,
        SharedModule,
        MatCardModule,
    ],
    declarations: [
        MovieComponent,
        MovieDetailComponent
    ],
    exports: [],
    providers: [
        MovieService
    ],
})
export class MovieModule { }