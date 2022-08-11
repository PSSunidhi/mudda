import React from 'react'

export const Posts = (props) => {
    return (
        <>
            <div className='component m-3'>
                <div className='row pl'>
                    <div className="col-md-7 row">
                        <div className='col-md-2'>
                            <img className='myImage' src="img/my image.jpg" alt="my Image" />
                        </div>
                        <div className='col-md-9'>
                            <b>Saket Subham</b>
                            <p>Bihar(S) . Problem . <strong className='active'> Government</strong></p>
                        </div>
                    </div>
                    <div className="col-md-5 row post">
                        <div className='col-md-10'>
                            <p>20 days ago</p>
                        </div>
                        <div className="col-md-2">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div> <hr />
                <div>
                    <p>{props.words}</p>
                    <div>{props.myPost}</div>
                </div> <hr />
                <div className='row pl'>
                    <div className="col-md-6">
                        <i class="fas fa-thumbs-up fa-lg active"></i>
                        <i class="far fa-thumbs-down fa-lg"></i>
                        <i class="far fa-comment-dots fa-lg"></i>
                    </div>
                    <div className="col-md-6 post">
                        <i class="fas fa-share-alt fa-lg"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
