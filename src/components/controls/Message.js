import React from "react";

const Message = ({type, message}) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    )
}

export default Message;