import { Routes } from "@angular/router";
import { MovieDetailComponent } from "./component/movie-details/movie-detail.component";
import { MovieComponent } from "./component/movie.component";

export const MovieRoutes: Routes = [
    {
        path: '',
        component: MovieComponent,
        data: { title: 'Details' }
    },
    {
        path: 'movie-detail/:id',
        component: MovieDetailComponent,
        data: { title: 'Details' }
    }
];