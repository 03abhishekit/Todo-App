



function Update({index, handleEdit}){
    return(
        <>
     
     <button className='btn' style={{width:"80px", margin:"10px"}} onClick={() => handleEdit(index)}>Edit</button>

        </>
    )
}

export default Update;