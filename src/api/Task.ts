import dayjs from "dayjs";

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

  static async fetchTasks(categoryIds: number[]): Promise<Task[]> {
    await new Promise((res) => {
      setTimeout(() => {
        res(1);
      }, 1000);
    });

    // Return some temporary sample data
    return [
      {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        categoryId: 1,
        dueDate: dayjs().add(14, "day").add(-30, "minute").toDate(),
      },
      {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        categoryId: 1,
        dueDate: dayjs().add(4, "day").add(30, "minute").toDate(),
      },
      {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        categoryId: 2,
        dueDate: dayjs().add(7, "day").add(30, "minute").toDate(),
      },
      {
        id: 4,
        title: "Task 4",
        description: "Task 4 description",
        categoryId: 2,
        dueDate: dayjs().add(6, "day").add(30, "minute").toDate(),
      },
    ];
  }
}
