import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function BillsTab(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bills, setBills] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('http://localhost:3004/bills')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setBills(result);
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
    <div className="bills-container">
      <h3>Bills Assigned to this Committee</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bill</th>
            <th>Author</th>
            <th>Sponsors</th>
            <th>Short Description</th>
            {/* <th>Committee Date</th> */}
            {/* <th>Committee Vote Status</th> */}
          </tr>
        </thead>
        <tbody>
          {bills.map(
            ({
              name,
              authors,
              sponsors,
              authors_names,
              sponsors_names,
              description,
              status,
              url,
            }) => (
              <tr key={name}>
                <td>
                  <a href={`http://iga.in.gov${url}`}>{name}</a>
                </td>
                <td>
                  {authors_names.map((authorName, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={`http://iga.in.gov${authors[index]}`}
                        key={index}
                      >
                        {`${authorName}`}
                      </a>
                      <React.Fragment key={authorName}>
                        {index === authors_names.length - 1 ? '' : ', '}
                      </React.Fragment>
                    </React.Fragment>
                  ))}
                </td>
                <td>
                  {sponsors_names.map((sponsorName, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={`http://iga.in.gov${sponsors[index]}`}
                        key={index}
                      >
                        {`${sponsorName}`}
                      </a>
                      <React.Fragment key={sponsorName}>
                        {index === sponsors_names.length - 1 ? '' : ', '}
                      </React.Fragment>
                    </React.Fragment>
                  ))}
                </td>
                <td>{description}</td>
                {/* <td>date</td> */}
                {/* <td>{status}</td> */}
              </tr>
            )
          )}
        </tbody>
      </Table>
      <style jsx>{`
        .bills-container {
          padding: 2rem 1rem;
        }
      `}</style>
    </div>
  );
}

export default BillsTab;
