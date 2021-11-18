import About from "./Screens/About";
import Home from "./Screens/Home";


const App = () => {
    return (
        <>
            <Home name={'Ram'} age={21}/>
            <Home name={'Amit'} age={34}/>
            <Home name={'Rahul'}/>
            {/* <About /> */}
        </>
  )
};


export default App