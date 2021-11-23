const Inner = ({fun}) => {

    const btnClick = () => {
        fun()
    }

    return (
      <div style={{ height: 200, width: 200, backgroundColor: "white" }}>
            <h2>Inner Component</h2>
            <button onClick={btnClick}>Click</button>
      </div>
    );
}

export default Inner
