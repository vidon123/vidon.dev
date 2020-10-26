import React, { Component } from 'react';

export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="home-background">
                    <h1>Welcome to my website</h1>
                    <img src={`${process.env.PUBLIC_URL}/images/profile-background.jpg`} alt="ProfileP" />
                </div>

                <h1 className="title">About me</h1>

                <div className="about-me">
                    <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="ProfilePicture" />
                    <p>
                        I'm Mattéo, I'm a french developer since my 13 years old. I love particulary web developement and I like use javascript frameworks.
                        I also like animes and music. I also love Suwaa 💕
                    </p>
                </div>
            </div>
        );
    }

}