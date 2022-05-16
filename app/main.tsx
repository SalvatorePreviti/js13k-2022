import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*
class MyWorld1 {
  x() {
    return 1;
  }
}

class MyWorld2 extends MyWorld1 {
  y() {
    return 2;
  }
}

class MyWorld3 extends MyWorld2 {
  z() {
    return 3;
  }
}

const world3 = new MyWorld3();

console.log(`hello world ${world3.x()}${world3.y()}${world3.z()}`); */

console.log("hello world1");

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode>Hello world!</React.StrictMode>);

console.log("hello world2");
