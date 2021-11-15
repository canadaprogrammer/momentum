document.addEventListener('DOMContentLoaded', () => {
  const toDoForm = document.querySelector('#todo-form');
  const toDoInput = document.querySelector('#todo-form input');
  const toDoList = document.querySelector('#todo-list');

  const TODOS_KEY = 'todos';
  let toDos = [];

  const deleteToDo = (event) => {
    const list = event.target.parentElement;
    // const indexToDo = toDos.findIndex((todo) => todo.id == list.id);
    // toDos.splice(indexToDo, 1);
    toDos = toDos.filter((todo) => String(todo.id) !== list.id);
    saveToDos();
    list.remove();
  };

  const printToDo = (todo) => {
    const li = document.createElement('li');
    li.id = todo.id;
    const span = document.createElement('span');
    span.innerText = todo.text;
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'X';
    btnDelete.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(btnDelete);
    toDoList.appendChild(li);
  };

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const input = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
      text: input,
      id: Date.now(),
    };
    toDos.push(newToDoObj);
    printToDo(newToDoObj);
    saveToDos();
  };
  toDoForm.addEventListener('submit', handleToDoSubmit);

  const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  };

  // const loadToDos = () => {
  //   const toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  //   if (toDos !== null) {
  //     toDos.forEach((todo) => {
  //       printToDo(todo);
  //     });
  //   }
  // };

  // loadToDos();

  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    // toDos.forEach((todo) => printToDo(todo));
    parseToDos.forEach(printToDo);
  }
});
