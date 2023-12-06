export class MovieModel {
    constructor(id: number, title: string, description: string, rating: number, duration: string, genre: Array<string>, releasedDate: Date, trailerLink: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.duration = duration;
        this.genre = genre;
        this.releasedDate = releasedDate;
        this.trailerLink = trailerLink;
    }

    id: number;
    title: string;
    description: string;
    rating: number;
    duration: string;
    genre: Array<string>;
    releasedDate: Date;
    trailerLink: string;
}