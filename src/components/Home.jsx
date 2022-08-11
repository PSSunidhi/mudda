import React from 'react'
import { Groups } from './Groups';
import { PostForm } from './homeComponent/PostForm';
import { Posts } from './homeComponent/Posts';
import { People } from './People';
import { Profile } from './Profile';
import { Ptags } from './Ptags';
import { Trending } from './Trending';

export const Home = () => {
    return (
        <>
            <div className="background p-4">
                <div className="row">
                    <div className="col-md-3">
                        <Profile />
                        <People />
                        <Ptags />
                    </div>
                    <div className="col-md-6 middle">
                        <PostForm />
                        <Posts words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam harum cupiditate odio omnis debitis explicabo vero cumque dolorem. Sint reiciendis nobis, eum officiis provident placeat enim ratione voluptate saepe esse quaerat recusandae eaque ad rerum quos a dolor asperiores unde? Officiis provident cum et tempore, sapiente voluptatibus? Voluptatibus, ut!" myPost={<b>READ MORE</b>} />
                        <Posts words="How's your Day going, Guys?" myPost={<img src="img/myPost.png" alt="img" />} />
                    </div>
                    <div className="col-md-3">
                        <Groups />
                        <Trending />
                    </div>
                </div>
            </div>
        </>
    )
}
