import React, { Component } from 'react';

export default class Skills extends Component {

    render() {
        return (
            <div>
                <h1 className="title">About my skills</h1>

                <div className="skills">
                    <h2 className="subtitle">Front-end</h2>

                    <div className="skills-element">
                        <div className="skill-element">
                            <h2>html <span>80%</span></h2>
                            <progress className="html" value="80" max="100" />
                        </div>

                        <div className="skill-element">
                            <h2>css <span>80%</span></h2>
                            <progress className="css" value="80" max="100" />
                        </div>

                        <div className="skill-element">
                            <h2>javascript <span>60%</span></h2>
                            <progress className="js" value="60" max="100" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}