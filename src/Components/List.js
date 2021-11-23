const List = ({data }) => {

    return (
        <div>
            <h1>Lists</h1>
            <ol>
                {data.map(
                    (ele) =>
                        <>
                            <li>{ele}</li>
                            <button>Click me</button>
                        </>
                )}
            </ol>
        </div>
    )
}
export default List
