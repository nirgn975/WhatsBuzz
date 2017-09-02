export class Buzz {
  unique_id: string;
  title: string;
  banner_image: string;
}

export class BuzzResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<Buzz>;
}
