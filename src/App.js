import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Todo from "./components/Todo";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "제목 1",
      contents: "내용 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목 2",
      contents: "내용 2",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <header
        style={{
          backgroundColor: "#F76B5C",
          padding: "10px",
        }}
      >
        헤더
      </header>
      <main
        style={{
          backgroundColor: "#93B9F9",
          padding: "10px",
        }}
      >
        <div>
          <h3>INPUT</h3>
          <div>
            <form
              onSubmit={function (event) {
                event.preventDefault();

                const newTodo = {
                  id: uuid(),
                  title,
                  contents,
                  isDone: false,
                };
                setTodos([...todos, newTodo]);
              }}
            >
              <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={function (event) {
                  setTitle(event.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="내용"
                value={contents}
                onChange={function (event) {
                  setContents(event.target.value);
                }}
              ></input>
              <button type="submit">제출하기</button>
            </form>
          </div>
        </div>
        <Todo todos={todos} isDone={false} setTodos={setTodos} />
        <Todo todos={todos} isDone={true} setTodos={setTodos} />
      </main>
      <footer
        style={{
          backgroundColor: "#A7F577",
          padding: "10px",
        }}
      >
        푸터
      </footer>
    </div>
  );
}

export default App;
