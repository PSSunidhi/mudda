import React from 'react'

export const GroupsComp = (props) => {
    return (
        <>
            <div className="groupCom row p-2 mb-3">                
                <div className="col-md-6"><b className='p-3 grn'>{props.name}</b></div>
                <div className="col-md-3 data">
                    <p> Members <br /> 528</p>
                </div>
                <div className="col-md-3 data">
                    <p>Posts <br /> 28 k</p>
                </div>                
            </div>
        </>
    )
}
