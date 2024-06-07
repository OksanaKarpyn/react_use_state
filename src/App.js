import "./App.css";
import React from "react";
import { useState, useRef } from "react";

function App() {
  const [st1, setSt1] = useState("");
  const t1 = useRef(null);
  function task1() {
    setSt1(t1.current.value);
    t1.current.value = "";
  }
  const [st2, setSt2] = useState(0);

  function task2() {
    let count = st2 + 1;
    setSt2(count);
  }
  const [st3, setSt3] = useState("");
  function task3(event) {
    //console.log(event.target.value);
    setSt3(event.target.value);
  }
  const [st4, setSt4] = useState(0);
  function task4() {
    let count = st4 + 1;
    setSt4(count);
  }
  const [st5, setSt5] = useState("");
  function task5(event) {
    //console.log(event);
    if (event.target.checked) {
      setSt5(event.target.defaultValue);
    } else {
      setSt5(0);
    }
  }
  const [st6, setSt6] = useState("");
  function task6(event) {
    //console.log(event.target.value);
    let value = event.target.value;
    setSt6(value);
  }
  const [st7, setSt7] = useState("");
  function random(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function task7() {
    let color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

    setSt7(color);
  }
  const [st8, setSt8] = useState("");
  function task8(event) {
    let res = !isNaN(event.key) ? st8 + 1 : st8 + 0;
    setSt8(res);
  }
  const [st9, setSt9] = useState("");
  function task9(event) {
    setSt9(event.target.value);
  }
  const t10 = useRef(null);
  const [st10, setSt10] = useState([]);
  function task10() {
    let res = [...st10, `  ${t10.current.value}`];
    setSt10(res);
    t10.current.value = "";
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={t1} />
        <button className="task-1" onClick={task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" defaultValue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{ background: st7 }}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={t10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div>Тут выводим - форма вывода любая!{st10}</div>
      </section>
    </>
  );
}

export default App;
