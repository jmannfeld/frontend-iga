import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function MeetingsTab(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [meetings, setMeetings] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  // useEffect(() => {
  //   fetch('http://localhost:3004/meetings')
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setIsLoaded(true);
  //         setMeetings(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       error => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="meetings-container">
      <h3>Upcoming Meetings</h3>
      {props.meetings.map(({ date, time, location, lpid, bills }, index) => (
        <Accordion defaultActiveKey={index === 0 ? '0' : ''} key={lpid}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Title>{date}</Card.Title>
              <Card.Subtitle>
                {time}, {location}
              </Card.Subtitle>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Bills to be Heard</th>
                      <th>Author</th>
                      <th>Sponsor</th>
                      <th>Committee Vote Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map(
                      ({
                        name,
                        authors_names,
                        sponsors_names,
                        authors,
                        sponsors,
                        status,
                        url,
                      }) => (
                        <tr key={name}>
                          <td>
                            <a href={`http://iga.in.gov${url}`}>{name}</a>
                          </td>
                          <td>
                            {authors_names.map((authorName, index) => (
                              <a
                                href={`http://iga.in.gov${authors[index]}`}
                                key={index}
                              >
                                {`${authorName}`}
                                {index === authors_names.length - 1 ? '' : ', '}
                              </a>
                            ))}
                          </td>
                          <td>
                            {sponsors_names.map((sponsorName, index) => (
                              <a
                                href={`http://iga.in.gov${sponsors[index]}`}
                                key={index}
                              >
                                {`${sponsorName}`}
                                {index === sponsors_names.length - 1
                                  ? ''
                                  : ', '}
                              </a>
                            ))}
                          </td>
                          <td>{status}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      <h3 className="past">Past Meetings</h3>
      {props.meetings.map(({ date, time, location, lpid, bills }, index) => (
        <Accordion defaultActiveKey='' key={lpid}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Title>{date}</Card.Title>
              <Card.Subtitle>
                {time}, {location}
              </Card.Subtitle>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Bills to be Heard</th>
                      <th>Author</th>
                      <th>Sponsor</th>
                      <th>Committee Vote Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map(
                      ({
                        name,
                        authors_names,
                        sponsors_names,
                        authors,
                        sponsors,
                        status,
                        url,
                      }) => (
                        <tr key={name}>
                          <td>
                            <a href={`http://iga.in.gov${url}`}>{name}</a>
                          </td>
                          <td>
                            {authors_names.map((authorName, index) => (
                              <a
                                href={`http://iga.in.gov${authors[index]}`}
                                key={index}
                              >
                                {`${authorName}`}
                                {index === authors_names.length - 1 ? '' : ', '}
                              </a>
                            ))}
                          </td>
                          <td>
                            {sponsors_names.map((sponsorName, index) => (
                              <a
                                href={`http://iga.in.gov${sponsors[index]}`}
                                key={index}
                              >
                                {`${sponsorName}`}
                                {index === sponsors_names.length - 1
                                  ? ''
                                  : ', '}
                              </a>
                            ))}
                          </td>
                          <td>{status}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      <style jsx>{`
        .meetings-container {
          padding: 2rem 1rem;
        }
        .past {
          padding-top: 2rem;
        }
      `}</style>
    </div>
  );
}

export default MeetingsTab;
