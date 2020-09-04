import React from 'react';
import Link from 'next/link';

const CommitteeList = ({committees}) => (
  <div className="mb-3 d-flex flex-column align-items-stretch justify-content-start">
    <div className="list-group">
      {committees.map(committee => (
        <Link key={`link-${committee.lpid}`} href={`/committees/${committee.lpid}`}>
          <a className="list-group-item list-group-item-action p-1">{committee.name}</a>
        </Link>)
      )}
    </div>

    <style jsx>{`
      .list-group-item-action {
        border: none;
        background-color: inherit;
        border-radius: 0;
        border-radius: 0;
      }
      
      .list-group-item-action:hover {
        background-color: white;
      }
    `}</style>
  </div>
);

export default CommitteeList;
