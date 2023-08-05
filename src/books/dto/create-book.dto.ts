export class CreateBookDto {
  isbn: string;
  title: string;
  genre: string;
  pages: number;
  cover?: string;
  synopsis?: string;
  year: number;
  author: string;
  isRead?: boolean = false;
}
