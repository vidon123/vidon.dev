import React, { Component } from 'react';

export default class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skills_front: [
                { name: "html", pourcent: 80 },
                { name: "css", pourcent: 80 },
                { name: "javascript", pourcent: 60 },
            ],
            skills_back: [
                { name: "php", pourcent: 50 },
                { name: "javascript", pourcent: 70 }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1 className="title">About my skills</h1>

                <div className="skills">
                    <h2 className="subtitle">Front-end</h2>

                    <div className="skills-element">
                        {this.state.skills_front.map(item =>
                            <div className="skill-element">
                                <h2>{item.name} <span>{item.pourcent}%</span></h2>
                                <progress className={item.name} value={item.pourcent} max="100" />
                            </div>
                        )}
                    </div>

                    <h2 className="subtitle">Back-end</h2>

                    <div className="skills-element">
                        {this.state.skills_back.map(item =>
                            <div className="skill-element">
                                <h2>{item.name} <span>{item.pourcent}%</span></h2>
                                <progress className={item.name} value={item.pourcent} max="100" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

}