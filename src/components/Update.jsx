



function Update({index, handleEdit}){
    return(
        <>
     
     <button className='btn' onClick={() => handleEdit(index)}>Edit</button>

        </>
    )
}

export default Update;