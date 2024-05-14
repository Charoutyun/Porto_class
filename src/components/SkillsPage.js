// src/components/SkillsPage.js

import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import { Typewriters } from './typewriter';
import "react-icons/ai";

const SkillsPage = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <Typewriters text1="Here are my skills:" />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">
                <i className="fa fa-code" aria-hidden="true"></i> Programming Languages
              </CardTitle>
              <CardText>
                <Badge color="primary" className="mr-1">Java</Badge>
                <Badge color="secondary" className="mr-1">C++</Badge>
                <Badge color="info" className="mr-1">Python</Badge>
                <Badge color="info" className="mr-1">Python</Badge>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="8">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">
                <i className="fa fa-desktop" aria-hidden="true"></i> Front-end Development
              </CardTitle>
              <CardText>
                Experienced in HTML, CSS, JavaScript, and frameworks like React and Svelte.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">
                <i className="fa fa-server" aria-hidden="true"></i> Backend Development
              </CardTitle>
              <CardText>
                <Badge color="dark" className="mr-1">Node.js</Badge>
                <Badge color="primary" className="mr-1">Express.js</Badge>
          
                <Badge color="danger" className="mr-1">MySQL</Badge>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="8">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">
                <i className="fa fa-wrench" aria-hidden="true"></i> Tools and Technologies
              </CardTitle>
              <CardText>
                <Badge color="warning" className="mr-1">Git</Badge>
                <Badge color="info" className="mr-1">Docker</Badge>
                <Badge color="primary" className="mr-1">Jenkins</Badge>
                <Badge color="success" className="mr-1">netify</Badge>
          
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">
                <i className="fa fa-users" aria-hidden="true"></i> Soft Skills
              </CardTitle>
              <CardText>
                <Badge color="primary" className="mr-1">Communication</Badge>
                <Badge color="secondary" className="mr-1">Teamwork</Badge>
                <Badge color="info" className="mr-1">Problem-Solving</Badge>
                <Badge color="success" className="mr-1">Time Management</Badge>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;
