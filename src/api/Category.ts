export default class Category {
  readonly id?: number;
  readonly title?: string;

  constructor(title: string) {
    this.id = undefined;
    this.title = title;
  }
}
