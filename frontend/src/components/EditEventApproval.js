import React, { useState } from 'react'
export const EditEventApproval = ({ initialStatus }) => 
{
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
        setStatus("Approved");
    }

    const handleReject = () =>
    {
        setStatus("Rejected");
    }

    // return (
    //     status === "Pending" ? btns : status
    // );

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
