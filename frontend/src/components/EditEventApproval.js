import React, { useState } from 'react'
export const EditEventApproval = (props) => 
{   
  const approvedClicked = async (i) => {
    let id = props.id;
    let approvedStatus = true;
    let dataUpdate = {id,approvedStatus};
    const response = await fetch('http://localhost:8080/demo' , {
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(dataUpdate)
    })
    
  };


    const [ status, setStatus ] = useState(props.initialStatus);
    const btns = 
    (
        <div>
            <button style={{backgroundColor:"initial"}} onClick={() => handleApprove()} >
                <i className="fa-solid fa-check fa-2xl" style={{color: "#00ff00"}}></i>
            </button>
            <button style={{backgroundColor:"initial"}} onClick={() => handleReject()} >
                <i className="fa-solid fa-x fa-2xl" style={{color: "#ff0000"}}></i>
            </button>
        </div>
    );

    const handleApprove = (i) =>
    {
        approvedClicked(i);
        setStatus("Approved");
        
    }

    const handleReject = () =>
    {
        setStatus("Rejected");
    }
    return (
        status === false ? (
            btns
        ) : (
            <div>
                <span style={{ color: status === "Rejected" ? "red" : "green" }}>
                    {status}
                </span>
            </div>
        )
    );
}
