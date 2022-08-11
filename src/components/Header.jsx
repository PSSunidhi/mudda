import React from 'react';

export const Header = () => {
    return (
        <>
            <nav>
                <div className="row">
                    <div className="col-md-3 post-cen">
                        <img className='logo2' src="/img/Logo.png" alt="logo" />
                        <a className='webname' href="/"><b> Mudda</b></a>
                    </div>
                    <div className="col-md-6 post-cen mt-3">
                        <a href="/"><i className="fas fa-home fa-2x active"></i></a>
                        <a href="/"><i className="far fa-compass fa-2x grey"></i></a>
                        <a href="/"><i className="fas fa-users fa-2x grey"></i></a>
                        <a href="/"><i className="far fa-bell fa-2x grey"></i></a>
                        <a href="/"><i className="far fa-user fa-2x grey"></i></a>
                    </div>
                    <div className="col-md-3 post-cen mt-3">
                        <i class="fas fa-bars fa-2x grey"></i>
                    </div>
                </div>
            </nav>
        </>
    )
};
