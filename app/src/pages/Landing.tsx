import React from 'react';
import { Container, Card } from 'react-bootstrap';
function Landing() {
  return (
    <>
      <div className='topicHeader'>
        <Container fluid style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>
            REVIEW 307
          </h2>
          <p>
            The following site is made available for students wishing to review
            or strengthen materials from{' '}
            <b>MATH 307 Linear Algebra and Differential Equations</b>. The
            topics and materials are based off of
            <b>past semesters</b>, therefore, you might encounter something
            different if you are taking the course now or in the future.
          </p>
          <div style={{ paddingLeft: '35px' }}>
            <h4 style={{ textAlign: 'left' }}>PREREQ(S)</h4>
            <p>
              {' '}
              You should have your knowledge on Calculus 1, Calculus 2, and
              Algebra.
            </p>
          </div>
        </Container>
      </div>
      <Container fluid style={{ textAlign: 'center' }}>
        <div className='mainBody'>
          <Card style={{ width: '20wv' }}>
            <Card.Header as='h4'>MATRIX FOUNDATION</Card.Header>
            <Card.Body>
              Review basic matrix operation such as row reducing or finding the
              inverse of a given matrix.
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
export default Landing;
