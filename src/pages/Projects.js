import React, { Component } from 'react';

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
           projects: [
               {
                   name: "brwserv",
                   url: "https://brwserv.net",
                   image: "../images/projects/brwserv.jpg"
               }
           ]
        }
    }

    render() {
        return (
            <div className="projects">
                {this.state.projects.map(project =>
                    <div style={{ background: 'url({project.image})' }} className="project">

                    </div>
                )}
            </div>
        );
    }

}