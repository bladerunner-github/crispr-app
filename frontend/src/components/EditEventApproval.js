import React, { useState } from 'react'
export const EditEventApproval = ({ initialStatus }) => 
{   
  const approvedClicked = async (i) => {
    let id = this.props.data[i]._id;
    let approvedStatus = true;
    let dataUpdate = {id,approvedStatus};
    console.log(dataUpdate)
    const response = await fetch('http://localhost:8080/demo' , {
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(dataUpdate)
    })
    
  };


    const [ status, setStatus ] = useState(initialStatus);
    const btns = 
    (
        <div>
            <button style={{backgroundColor:"initial"}} onClick={() => handleApprove()} >
                <i className="fa-solid fa-check fa-2xl" style={{color: "#00ff00"}}></i>
            </button>
            <button style={{backgroundColor:"initial"}} onClick={() => handleReject()} >
                <i class="fa-solid fa-x fa-2xl" style={{color: "#ff0000"}}></i>
            </button>
        </div>
    );

    const handleApprove = () =>
    {
        // approvedClicked();
        setStatus("Approved");
    }

    const handleReject = () =>
    {
        setStatus("Rejected");
    }



    return (
        status === "Pending" ? (
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
