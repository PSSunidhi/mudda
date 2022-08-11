import React from 'react';
import { TrendingComp } from './cardsComponent/TrendingComp';

export const Trending = () => {
    return (
        <>
            <div className="component m-3">
                <div class="row p-3">
                    <div><b>TRENDING ISSUES</b></div>
                </div> <hr />
                <div className='p-3'>
                    <TrendingComp count="1" title="Did Procreate change the new Illusteration?" image={"img/trending4.jpeg"} />
                    <TrendingComp count="2" title="Modern Bihar has an inadeate educational infrastructure" image={"img/trending3.jpeg"} />
                    <TrendingComp count="3" title="Did Procreate change the new Illusteration?" image={"img/trending2.jpg"} />
                    <TrendingComp count="4" title="Did Procreate change the new Illusteration?" image={"img/trending1.jpeg"} />
                </div>
                <hr />
                <div className='post-cen'><b className='active'><a className='button-2' href="/"> VIEW ALL </a></b></div>
            </div>
        </>
    )
};
