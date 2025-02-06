



function Delete({index, handleDelete}){
    return(
        <>
         <button className='btn' onClick={() => handleDelete(index)}>Delete</button>
        </>
    )
}

export default Delete;