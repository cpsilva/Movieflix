import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie!: MovieModel | undefined;
  public watchList: Array<MovieModel> = new Array<MovieModel>();
  public itIsOnWatchList: boolean = false;
  public trailerLink!: SafeResourceUrl;

  constructor(private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _location: Location) {
  }

  ngOnInit(): void {
    const id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.movieService.getMovieById(id).subscribe((result) => {
      this.movie = result;
      this.trailerLink = this.getTrailerEmbededLink(result!.trailerLink)
      if (localStorage.getItem("watchList")) {
        const watchListStorage: Array<MovieModel> = JSON.parse(localStorage.getItem("watchList")!);
        this.watchList = watchListStorage;
        this.itIsOnWatchList = this.watchList.some(x => x.id === this.movie!.id)
      }
    });
  }

  getTrailerEmbededLink(trailerLink: string) {
    const urlParams = (new URL(trailerLink)).searchParams;
    const videoId = urlParams.get('v');
    return this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?si=Ch2URkGxWYYXXSdo&amp;controls=1`);
  }

  back(): void {
    this._location.back();
  }

  addToWatchList(movie: MovieModel) {
    if (this.watchList.find(x => x.id === movie.id)) {
      return;
    }

    this.watchList.push(movie);
    localStorage.setItem("watchList", JSON.stringify(this.watchList));
    this.itIsOnWatchList = true;
  }

  removeFromWatchList(movie: MovieModel) {
    if (this.watchList.find(x => x.id === movie.id)) {
      this.watchList = this.watchList.filter(x => x.id != movie.id);
      localStorage.setItem("watchList", JSON.stringify(this.watchList));
      this.itIsOnWatchList = false;
    }
  }
}
