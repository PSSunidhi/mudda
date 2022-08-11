import React from 'react';

export const TrendingComp = (props) => {
  return (
    <>
        <div className="row ">
            <div className="count col-md-1">{props.count}</div>
            <div className="col-md-9">
                <div><b>{props.title}</b></div>
                <div className="row">
                    <div className="col-md-8 data">Darbhanga . Politics</div>
                    <div className="col-md-2 post"><i class="far fa-comment-dots fa-lg"></i></div>
                </div>
            </div>
            <div className="col-md-2">
                <img className='trendpic' src={props.image} alt="" />
            </div>
        </div>
        <hr />
    </>
  )
};
