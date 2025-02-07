



function Delete({index, handleDelete}){
    return(
        <>
         <button className='btn' style={{width:"80px", margin:"10px"}} onClick={() => handleDelete(index)}>Delete</button>
        </>
    )
}

export default Delete;