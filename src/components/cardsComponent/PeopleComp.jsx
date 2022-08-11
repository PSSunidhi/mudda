import React from 'react'

export const PeopleComp = (props) => {
    return (
        <>
            <div className="groupCom row mb-3">                
                <div className="col-md-3">
                    <img className='myImage' src={props.images} alt="Image" />
                </div>
                <div className="col-md-5 p-2 data">
                    <p><b>{props.name}</b> <br />{props.title}</p>
                </div>
                <div className="col-md-4 p-4 data">
                    <a className='button' href="">FOLLOW</a>
                </div>                
            </div>
        </>
    )
}
