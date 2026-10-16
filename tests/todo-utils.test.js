const { filterTasks } = require('../todo-utils');

const sampleTasks = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Do homework', completed: true },
  { id: 3, text: 'Reply email', completed: false },
];

describe('filterTasks', () => {
  test('"all" returns every task', () => {
    expect(filterTasks(sampleTasks, 'all')).toEqual(sampleTasks);
  });

  test('"active" returns only tasks that are not completed', () => {
    const result = filterTasks(sampleTasks, 'active');
    expect(result.map(t => t.id)).toEqual([1, 3]);
  });

  test('"completed" returns only completed tasks', () => {
    const result = filterTasks(sampleTasks, 'completed');
    expect(result.map(t => t.id)).toEqual([2]);
  });

  test('unknown filter falls back to all tasks', () => {
    expect(filterTasks(sampleTasks, 'something-else')).toEqual(sampleTasks);
  });

  test('empty task list returns an empty array', () => {
    expect(filterTasks([], 'active')).toEqual([]);
  });

  test('non-array input returns an empty array', () => {
    expect(filterTasks(null, 'all')).toEqual([]);
    expect(filterTasks(undefined, 'completed')).toEqual([]);
  });

  test('does not modify the original task list', () => {
    const copy = JSON.parse(JSON.stringify(sampleTasks));
    filterTasks(sampleTasks, 'active');
    expect(sampleTasks).toEqual(copy);
  });
});
