const MultipleReturn = ({ isAdmin }) => {
    

    // if (isAdmin) {
    //     return (
    //         <h1>Hello Admin</h1>
    //     )
    //  }

    // return (
    //     <div>
    //         <h2>Hello User</h2>
    //     </div>
    // )


    return (
            <>
                {isAdmin ? <h1>Hello Admin </h1> : <h2>Hello User</h2> }
            </>
    )
}

export default MultipleReturn
