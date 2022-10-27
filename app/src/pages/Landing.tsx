import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';
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
          <h3>MATRIX FOUNDATION</h3>
          <p>
            Review basic matrix operation such as row reducing or finding the
            inverse of a given matrix.
          </p>

          <CardGroup style={{ fontSize: '12px' }}>
            <Card>
              <Card.Header as='h5'>OPERATIONS</Card.Header>
              <Card.Body>
                Review basic matrix operation such as row reducing or finding
                the inverse of a given matrix.
              </Card.Body>
            </Card>
            &nbsp;
            <Card>
              <Card.Header as='h5'>ROW REDUCING</Card.Header>
              <Card.Body>Review how to row reduce the given matrix.</Card.Body>
            </Card>
            &nbsp;
            <Card>
              <Card.Header as='h5'>DETERMINANT</Card.Header>
              <Card.Body>
                Review basic matrix operation such as row reducing or finding
                the inverse of a given matrix.
              </Card.Body>
            </Card>
          </CardGroup>
              <h3></h3>
              </div>
              
      </Container>
    </>
  );
}
export default Landing;
