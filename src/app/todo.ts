export class Todo {
  id: number;
  title: string;
  complete: boolean;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}

let todo = new Todo({
  title: 'Read SitePoint article',
  complete: false
});
