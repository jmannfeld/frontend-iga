import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MeetingsTab() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [meetings, setMeetings] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('http://localhost:3004/meetings')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setMeetings(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="meetings-container">
      {meetings.map(({ date, time, location, lpid }, index) => (
        <Accordion defaultActiveKey={index === 0 ? '0' : ''} key={lpid}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {date} {time} {location}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Meeting details</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      <style jsx>{`
        .meetings-container {
          padding-top: 2rem;
        }
      `}</style>
    </div>
  );
}

export default MeetingsTab;
