import { Artical } from './artical.model';

export class Comment {

  id: number;
  name: string;
  email: string;
  body: string;
  artical: Artical;
}
