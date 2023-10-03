for(let checkbox of document.querySelectorAll("input[type='checkbox']")) {
  checkbox.addEventListener("change", (e) => {
    // todo-id == todoId
    // todoId == todoid
    const body = new FormData();
    body.append("is_completed", e.target.checked);
    fetch(`/todos/${e.target.dataset.todoId}/`, {
      method: 'post',
      body
    });
  });
}