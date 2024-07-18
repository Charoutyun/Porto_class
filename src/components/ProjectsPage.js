// src/components/ProjectsPage.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Typewriters } from './typewriter'; 
import './ProjectsPage.css'; 

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch your GitHub repositories
    fetch('https://api.github.com/users/charoutyun/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <Typewriters text1="Here are some of my class assignments and projects:" />
        </Col>
      </Row>
      <Row>
        {repos.map(repo => (
          <Col md="6" lg="4" key={repo.id} className="mb-4">
            <Card className="project-card shadow-sm">
              <CardBody>
                <CardTitle tag="h5" className="text-white font-weight-bold">{repo.name}</CardTitle>
                <CardText>{repo.description || ""}</CardText>
                <Button color="primary" href={repo.html_url} target="_blank">
                  View on GitHub
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
