import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  console.log(props.course)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => {
        return <Part key={index} name={part.name} exercises={part.exercises} />
      })}
    </div>
  );
  // return (
  //   <div>
  //     {props.parts.map((part, index) => {
  //       return <p key={index}>{part.name} {part.exercises}</p>
  //     })}
  //   </div>
  // );
};

const Total = (props) => {
  const total = props.parts.reduce(
    (counter, obj) => counter + obj.exercises,
    0
  );
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
