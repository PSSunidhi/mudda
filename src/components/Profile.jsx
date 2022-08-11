import React from 'react'

export const Profile = () => {
    return (
        <>
            <div className="component m-3 profile">
                <div>
                    <img className='cover' src="img/myPost.png" alt="img" />
                </div>
                <div className='procon'>
                    <img className='profileImage' src="img/my image.jpg" alt="img" />
                </div>
                <div className='about'>
                    <div className="post-cen">
                        <b className='post-cen'>Saket Subham</b><i class="fas fa-certificate active"></i>
                    </div>
                    <p className='post-cen about-data'>Freelancer UX/UI designer, 80+ projects <br /> in web design, mobile apps(ios & android) and creative <br /> projects. Open to offers. </p>
                </div>
                <div className="row">
                    <div className="col-md-6 post-cen">Followers <br /> 523</div>
                    <div className="col-md-6 post-cen">Following <br /> 310</div>
                </div>
                <div className='post-cen mt-5'><b className='active'><a href="/"> MANAGE PROFILE </a></b></div>
            </div>
        </>
    )
}
