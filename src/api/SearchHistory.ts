import Task from "@/api/Task";

export default class SearchHistory {
  readonly id?: number;
  readonly text?: string;
  readonly results: Task[] = [];

  constructor(text?: string) {
    this.id = undefined;
    this.text = text;
  }

  static async fetchSearchHistory(): Promise<SearchHistory[]> {
    // Simulate an internet transaction
    await new Promise((res) => {
      setTimeout(() => res(1), 1000);
    });

    // Return some temporary sample data
    return [
      {
        id: 1,
        text: "Search Text",
        results: await Task.fetchTasks([1, 2]),
      },
    ];
  }
}
