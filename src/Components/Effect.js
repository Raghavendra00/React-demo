import { useState,useEffect} from 'react'

const Effect = () => {


    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log('Effect Called')
    },[count])
    

    const btnClick = () => {
      console.log("Button Clicked");

      var newCount = count
      setCount(newCount+=1)
      // console.log(count)
    }

    return (
      <div>
        <h1>useEffect</h1>
        <h2>Counter : {count}</h2>
        <button onClick={btnClick}>Click ME</button>
      </div>
    );
}

export default Effect
