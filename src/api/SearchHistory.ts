import Task from "@/api/Task";

export default class SearchHistory {
  readonly id?: number;
  readonly task!: Task;

  constructor(text?: string) {
    this.id = undefined;
  }

  static async fetchSearchHistory(search: string): Promise<SearchHistory[]> {
    // Simulate an internet transaction
    await new Promise((res) => {
      setTimeout(() => res(1), 1000);
    });
    let t = await Task.searchTasks(search, 3);

    // Return some temporary sample data
    return t.reduce((acc: SearchHistory[], r, index) => {
      acc.push({ id: index + 1, task: r });
      return acc;
    }, []);
  }
}
