import Card from "./Components/Card";
import ChildrenDemo from "./Components/ChildrenDemo";
import Effect from "./Components/Effect";
import List from "./Components/List";
import MultipleReturn from "./Components/MultipleReturn";
import State from "./Components/State";
import About from "./Screens/About";
import Home from "./Screens/Home";

const App = () => {
  const arr = ["aman", "rahul", "amit", "ram"];

  const btnClick = () => {
    console.log("Button Clicked");
  };

  const frmSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", e);
  };

  return (
    <>
      {/* <Home name={'Ram'} age={21}/>
            <Home name={'Amit'} age={34}/>
            <Home name={'Rahul'}/> */}
      {/* <About /> */}
      {/* <ChildrenDemo>
          <h3>Thiis is a children</h3>
          <Home name={"Ram"} age={21} />
        </ChildrenDemo> */}
      {/* <MultipleReturn isAdmin={false} /> */}

      {/* <button onClick={btnClick}>Click Me</button> */}
      {/* <form onSubmit={frmSubmit}>
                <button type="submit" >Form Submit</button>
            </form> */}

      {/* <List data={arr} /> */}
      {/* <State /> */}
      {/* <Effect /> */}

      <Card />
    </>
  );
};
export default App;
