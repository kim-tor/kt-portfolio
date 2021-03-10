import React, { Component} from 'react';
import project from "../data/project";
import Card from "../components/Card/Card";

class Project extends Component {
    state = {
        project
    }

    render() {
        return (
        <div className ="condiv projects">
          {this.state.project.map(project => (
          
            <Card
                title={project.title}
                image={project.image}
                description={project.description}
                deployed={project.deployed}
                github={project.github}
            />
          ))}
        </div>
        );
    }
}

export default Project;