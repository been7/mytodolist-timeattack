import React from "react";

function Todo({ isDone, todos, setTodos }) {
  return (
    <div>
      <h3>{isDone ? "Done" : "Working"}</h3>
      {todos
        .filter((i) => {
          return i.isDone === isDone;
        })
        .map(function (todo) {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.contents}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  const newTodos = todos.filter(
                    (filteredTodo) => filteredTodo.id != todo.id
                  );
                  setTodos(newTodos);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
