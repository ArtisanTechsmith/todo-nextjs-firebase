export default class Category {
  readonly id?: number;
  readonly title?: string;

  constructor(title: string) {
    this.id = undefined;
    this.title = title;
  }

  static async fetchCategories(): Promise<Category[]> {
    //Simulate an internet transaction
    await new Promise((res) => {
      setTimeout(() => {
        res(1);
      }, 1000);
    });

    // Return some temporary sample data
    return [
      {
        id: 1,
        title: "Category 1",
      },
      {
        id: 2,
        title: "Category 2",
      },
    ];
  }
}
