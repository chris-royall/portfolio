import React from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppProjects.css';

const Projects: React.FC = () => {

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h2>Angular Web Application</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: Angular Web Application')}
            href="https://github.com/chris-royall/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
          <a
            onClick={() => handleLinkClick('Web Application: Angular Web Application')}
            href="https://chrisroyall.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Web Application</button>
          </a>
        </div>
        <p>
          This repository showcases my skills in front-end development and AWS cloud services by implementing a
          functional web application with advanced logging, email automation, and data retention strategies.
        </p>
      </div>

      <div className="inner-container">
        <h2>AI Recipe Generator</h2>
        <div className="button-container">
          <a
            onClick={() => handleLinkClick('GitHub: AI Recipe Generator')}
            href="https://github.com/chris-royall/ai-recipe-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
          <a
            onClick={() => handleLinkClick('Web Application: AI Recipe Generator')}
            href="https://recipes.chrisroyall.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Web Application</button>
          </a>
        </div>
        <p>
          This repository highlights my experience in front-end development and AWS cloud services through the creation of
          a functional, AI-powered web application. The app generates recipes based on user inputs, features secure user
          authentication, and includes advanced logging mechanisms.
        </p>
      </div>
    </div>
  );
};

export default Projects;