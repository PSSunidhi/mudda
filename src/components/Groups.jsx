import React from 'react'
import { GroupsComp } from './cardsComponent/GroupsComp'

export const Groups = () => {
    return (
        <>
            <div className="component m-3">
                <div class="row p-3">
                    <div className="col-md-6"><b> MY GROUPS</b></div>
                    <div className="col-md-6 post active"><b> + ADD NEW </b></div>
                </div>
                <div className='p-3'>
                    <GroupsComp name="Bharat" />
                    <GroupsComp name="New Delhi" />
                    <GroupsComp name="Arunachal Pradesh" />
                </div>
                <hr />
                <div className='post-cen'><b className='active'><a href="/"> SEE ALL </a></b></div>
            </div>
        </>
    )
}
