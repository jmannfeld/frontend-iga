import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function MeetingsTab(props) {
  const arrayToObject = array =>
    array.reduce((obj, item) => {
      obj[item.lpid] = item;
      return obj;
    }, {});

  const initialMeetingList = arrayToObject(props.meetings);
  const firstMeeting = props.meetings[0];

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [meetings, setMeetings] = useState(initialMeetingList);
  const [detailsUrl, setDetailsUrl] = useState(
    `http://localhost:3004/meetingDetails?lpid=${firstMeeting.lpid}`
  );

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        // `https://iaj822wghd.execute-api.us-east-1.amazonaws.com/getMeetingDetails?cmte_lpid=${
        //   props.committeeLpid
        // }&meeting_lpid=${firstMeeting.lpid}`
        detailsUrl
      )
        .then(response => response.json())
        .then(
          data => {
            // data.bills = JSON.parse(data.bills);
            console.log('data', data);
            data = data[0];
            console.log('meetings before update', meetings);
            const updatedMeetings = meetings[data.lpid];
            updatedMeetings.bills = data.bills;
            setMeetings(meetings);
            console.log('meetings after update', meetings);
            setIsLoaded(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };
    fetchData();
  }, [detailsUrl]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="meetings-container">
      <h3>Upcoming Meetings</h3>
      <Accordion defaultActiveKey="0" key={firstMeeting.lpid}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Title>{firstMeeting.date}</Card.Title>
            <Card.Subtitle>
              {firstMeeting.time}, {firstMeeting.location}
            </Card.Subtitle>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {firstMeeting.bills && (
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
                    {firstMeeting.bills.map(
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
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {console.log('meetings:', meetings)}
      <h3 className="past">Past Meetings</h3>
      {Object.keys(meetings)
        .slice(1)
        .map(key => {
          console.log(key, meetings[key]);
          return (
            <Accordion
              defaultActiveKey=""
              key={key}
              onClick={() => {
                setDetailsUrl(
                  `http://localhost:3004/meetingDetails?lpid=${
                    meetings[key].lpid
                  }`
                );
              }}
            >
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="">
                  <Card.Title>{meetings[key].date}</Card.Title>
                  <Card.Subtitle>
                    {meetings[key].time}, {meetings[key].location}
                  </Card.Subtitle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {console.log(meetings[key])}
                    {meetings[key].bills && (
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
                          {meetings[key].bills.map(
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
                                      href={`http://iga.in.gov${
                                        authors[index]
                                      }`}
                                      key={index}
                                    >
                                      {`${authorName}`}
                                      {index === authors_names.length - 1
                                        ? ''
                                        : ', '}
                                    </a>
                                  ))}
                                </td>
                                <td>
                                  {sponsors_names.map((sponsorName, index) => (
                                    <a
                                      href={`http://iga.in.gov${
                                        sponsors[index]
                                      }`}
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
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
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
