import { useState } from "react";

const State = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState({
    name: "Aman",
    age: 21,
    salary: 23000,
  });

  // var name = 'Ram'

  const btnClick = () => {
    // name = 'Rohit'
    // console.log('button clicked')
    // console.log("New Name:",name)
    // setName('Ram')
    // var newCount = count
    // setCount(newCount+=1)
    // console.log(count)
    // setDetails({ name: "Ram", age: 21, salary: 23000 });
    setDetails({ ...details, name: "Amit" });
  };

  return (
    <div>
      <h1>useState</h1>
      {/* <h1>Name is : {name}</h1>
      <h2>Counter : { count }</h2> */}
      <h1>Name : {details.name}</h1>
      <h1>Age : {details.age}</h1>
      <h1>Salary : {details.salary}</h1>
      <button onClick={btnClick}>Click to change</button>
    </div>
  );
};

export default State;
