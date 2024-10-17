import React from 'react';
import { Container, Row, Col, Button, Card, Navbar } from 'react-bootstrap';
import { PersonPlusFill, BriefcaseFill, PeopleFill, BarChartLineFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Container className="py-5">
          {/* Hero Section */}
          <Row className="text-center py-5">
            <Col>
              <h1 className="display-4 fw-bold">Empower Your Workforce Management</h1>
              <p className="lead text-muted">
                AdminAccess: Your comprehensive solution for efficient employee data management.
              </p>
              <Link to="/employees">
                <Button variant="primary" size="lg" className="mt-3">Get Started</Button>
              </Link>
            </Col>
          </Row>

          {/* Features Section */}
          <Row className="py-5">
            <Col xs={12}>
              <h2 className="text-center mb-5">Key Features</h2>
            </Col>
            {[
              { name: 'Manage Employees', icon: PersonPlusFill, description: 'Add, update, and manage employee information with ease.' },
              { name: 'Department Control', icon: BriefcaseFill, description: 'Organize and oversee various departments efficiently.' },
              { name: 'Role Management', icon: PeopleFill, description: 'Define and assign roles to streamline operations.' },
              { name: 'Data Insights', icon: BarChartLineFill, description: 'Gain valuable insights from your workforce data.' },
            ].map((feature, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <feature.icon className="text-primary mb-3" size={32} />
                    <Card.Title>{feature.name}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer className="bg-dark text-light py-3">
        <Container>
          <p className="text-center mb-0">
            © 2024 AdminAccess. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
