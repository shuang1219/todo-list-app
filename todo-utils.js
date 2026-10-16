// Pure helper functions for the To-Do List app.
// Kept in a separate file so they can be unit-tested with Jest.

function filterTasks(tasks, filter) {
  if (!Array.isArray(tasks)) {
    return [];
  }
  if (filter === 'active') {
    return tasks.filter(t => t.completed);
  }
  if (filter === 'completed') {
    return tasks.filter(t => t.completed);
  }
  return tasks;
}

// Export for Jest (Node.js); in the browser this is simply a global function.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { filterTasks };
}
