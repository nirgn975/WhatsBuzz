import { Tag } from './tag';

export class Post {
  unique_id: string;
  title: string;
  body: string;
  banner_image: string;
  age_categories: string;
  tags: Array<Tag>;
}

export class PostResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<Post>;
}
