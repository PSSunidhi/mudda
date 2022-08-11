import React from 'react'

export const PostForm = () => {
    return (
        <>
            <div class="m-3 component">
                <div className="row">
                    <div className="col-md-1">
                        <img className='myImage' src="img/my image.jpg" alt="" />
                    </div>
                    <div className="col-md-11">
                        <textarea placeholder='Write Something ...' class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href="/"><i class="far fa-image fa-lg m-3 grey"></i></a>
                        <a href="/"><i class="fas fa-video fa-lg m-3 grey"></i></a>
                        <a href="/"><i class="fab fa-youtube fa-lg m-3 grey"></i></a>
                    </div>
                    <div className='col-md-6 post'>
                        <a href="/"><i class="fas fa-paper-plane fa-2x m-2"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
