import React from 'react'

export const Ptags = () => {
    return (
        <>
            <div className="component m-3">
                <div class="row p-3">
                    <div><b>POPULAR TAGS</b></div>
                </div>
                <div className='p-3'>
                    <i>Government</i>
                    <i>Business</i>
                    <i>Politics</i> <br />
                    <i>Education</i>
                    <i>Petrol</i>
                    <i>Travel</i> <br />
                    <i>Pollution</i>
                    <i>Schools</i>
                    <i>Environment</i>
                </div>
                <hr />
                <div className='post-cen'><b className='active'><a href="/"> SEE ALL </a></b></div>
            </div>
        </>
    )
}
