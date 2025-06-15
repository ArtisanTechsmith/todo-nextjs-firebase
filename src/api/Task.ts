export default class Task {
  readonly id?: number;
  readonly title: string;
  readonly description: string;
  readonly categoryId: number;
  readonly dueDate?: Date;

  constructor(title: string, description: string, categoryId: number, dueDate?: Date) {
    this.id = undefined;
    this.title = title;
    this.description = description;
    this.categoryId = categoryId;
    this.dueDate = dueDate;
  }
}
