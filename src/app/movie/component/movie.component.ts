import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MovieService } from '../service/movie.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [
    trigger('cardTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate(200)
      ]),
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        ),
      ]),
    ]),
  ]
})
export class MovieComponent implements OnInit {

  public movieList: Array<MovieModel> = new Array<MovieModel>();
  public watchList: Array<MovieModel> = new Array<MovieModel>();
  public changeText: boolean = false;
  public movieDetailId: number = 0;
  public sortType: string = '';

  constructor(private movieService: MovieService,
    private cdr: ChangeDetectorRef,
    private route: Router) {

  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.movieList = movies;

      if (localStorage.getItem("watchList")) {
        const watchListStorage: Array<MovieModel> = JSON.parse(localStorage.getItem("watchList")!);
        this.watchList = watchListStorage;
      }

      this.cdr.detectChanges();
    });
  }

  getThumbnailPicture(trailerLink: string) {
    const urlParams = (new URL(trailerLink)).searchParams;
    const videoId = urlParams.get('v');
    return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
  }

  addToWatchList(movie: MovieModel) {
    if (this.watchList.find(x => x.id === movie.id)) {
      return;
    }

    this.watchList.push(movie);
    localStorage.setItem("watchList", JSON.stringify(this.watchList));
    this.cdr.detectChanges();
  }

  removeFromWatchList(movie: MovieModel) {
    if (this.watchList.find(x => x.id === movie.id)) {
      this.watchList = this.watchList.filter(x => x.id != movie.id);
      localStorage.setItem("watchList", JSON.stringify(this.watchList));
      this.cdr.detectChanges();
    }
  }

  goToMovieDetails(movie: MovieModel) {
    this.route.navigateByUrl(`/movie-detail/${movie.id}`)
  }

  itIsOnWatchlist(movie: MovieModel) {
    return this.watchList.some(m => m.id === movie.id)
  }

  displayMovieDetails(_t32: MovieModel, arg1: boolean) {
    if (arg1) {
      this.movieDetailId = _t32.id;
    } else {
      this.movieDetailId = 0;
    }

    return arg1;
  }

  sortBy(typeSort: string) {
    this.sortType = typeSort;

    switch (typeSort) {
      case 'titleAsc':
        this.movieList = this.movieList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
      case 'titleDesc':
        this.movieList = this.movieList.sort((a, b) => (b.title > a.title) ? 1 : -1)
        break;
      case 'releaseDateAsc':
        this.movieList = this.movieList.sort((a, b) => (a.releasedDate > b.releasedDate) ? 1 : -1)
        break;
      case 'releaseDateDesc':
        this.movieList = this.movieList.sort((a, b) => (b.releasedDate > a.releasedDate) ? 1 : -1)
        break;
      default:
        this.movieList = this.movieList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
    }
    throw new Error('Method not implemented.');
  }
}
