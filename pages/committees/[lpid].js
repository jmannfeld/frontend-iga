import React, { useContext } from 'react';
import { FaShare, FaRss, FaLink, FaPrint } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { useRouter } from 'next/router';
import { Context } from '../../components/Utils/Context';
import * as agriculture from '../../data/agriculture.json';
import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import TabSwitcher from '../../components/Committees/TabSwitcher';

import * as committee_names from '../../data/committees_names.json';

function CommitteePage({ meetingsArr, committeeLpid }) {
  const router = useRouter();
  if (router.isFallback) {
    return <CommitteeLayout>Loading...</CommitteeLayout>;
  }
  const { lpid: meetingLpid, date, time, location } = meetingsArr;
  return (
    <CommitteeLayout>
      <div className="title-bar">
          <h1>
              {"(" + committee_names.default[committeeLpid].chamber[0].toUpperCase() + ") "}
              {committee_names.default[committeeLpid].name}
          </h1>
        <div>
          <IconContext.Provider
            value={{ size: '2.25em', className: 'meeting-pills' }}
          >
            <a href="#" className="badge badge-primary">
              <FaShare />
            </a>
            <a href="#" className="badge badge-primary">
              <FaRss />
            </a>
            <a href="#" className="badge badge-primary">
              <FaLink />
            </a>
            <a href="#" className="badge badge-primary">
              <FaPrint />
            </a>
          </IconContext.Provider>
        </div>
      </div>
      <TabSwitcher committeeLpid={committeeLpid} meetings={meetingsArr} />
      <style jsx>{`
        h1 {
          padding-bottom: 0.5em;
        }
        .title-bar {
          display: flex;
          justify-content: space-between;
        }
        .title-bar a {
          margin-right: 1em;
          margin-top: 0.5em;
        }
      `}</style>
    </CommitteeLayout>
  );
}

export async function getStaticPaths() {
  let paths = [];

  // Since this will only be called once during build time we don't need the context
  const committee_api =
    'https://iaj822wghd.execute-api.us-east-1.amazonaws.com/test/GetCommittees';
  const response = await fetch(committee_api);

  if (response.status === 200) {
    const committees = await response.json();
    paths = committees.map(committee => ({
      params: {
        lpid: committee.lpid,
      },
    }));
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let meetingsArr;
  try {
    // TODO: Update this with actual API call
    const response = await fetch(
      // `https://iaj822wghd.execute-api.us-east-1.amazonaws.com/getMeetings?cmte_lpid=${
      //   params.lpid
      // }`
      'http://localhost:3004/getMeetings'
    );
    if (response.status === 200) {
      meetingsArr = await response.json();
      meetingsArr =
        meetingsArr.length > 0
          ? meetingsArr
          : JSON.parse(JSON.stringify(agriculture));
    } else meetingsArr = JSON.parse(JSON.stringify(agriculture));
  } catch (Exception) {
    meetingsArr = JSON.parse(JSON.stringify(agriculture));
  }
  return {
    props: {
      meetingsArr,
      committeeLpid: params.lpid,
    },
  };
}

export default CommitteePage;
