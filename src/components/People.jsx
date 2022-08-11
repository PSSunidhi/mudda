import React from 'react'
import { PeopleComp } from './cardsComponent/PeopleComp'


export const People = () => {
    return (
        <>
            <div className="component m-3">
                <div class="row p-3">
                    <div><b>PEOPLE YOU MAY KNOW</b></div>
                </div>
                <div className='p-3'>
                    <PeopleComp images="img/SteveJobs.jpg" name="Steve Jobs" title="CEO of Apple" />
                    <PeopleComp images="img/RyanRoslanky.jpeg" name="Ryan Roslanky" title="CEO of Linkedin" />
                    <PeopleComp images="img/DylanField.jpeg" name="Dylan Field" title="CEO of Figma" />
                </div>
                <hr />
                <div className='post-cen'><b className='active'><a href="/"> SEE ALL </a></b></div>
            </div>
        </>
    )
}
