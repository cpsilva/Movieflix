import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie!: MovieModel | undefined;

  constructor(private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _location: Location) {
  }

  ngOnInit(): void {
    const id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.movieService.getMovieById(id).subscribe((result) => {
      this.movie = result;
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
}
