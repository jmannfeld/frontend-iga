import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MeetingsTab from './MeetingsTab';
import BillsTab from './BillsTab';
import MembersTab from './MembersTab';

const TabSwticher = ({ committeeLpid }) => (
  <div>
    <Tabs defaultActiveKey="meetings" className="nav-pills nav-fill">
      <Tab eventKey="meetings" title="Committee Meetings">
        <MeetingsTab committeeLpid={committeeLpid} />
      </Tab>
      <Tab eventKey="bills" title="Assigned Bills">
        <BillsTab committeeLpid={committeeLpid} />
      </Tab>
      <Tab eventKey="members" title="Committee Members">
        <MembersTab committeeLpid={committeeLpid} />
      </Tab>
    </Tabs>
  </div>
);

export default TabSwticher;
