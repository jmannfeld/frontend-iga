import React from "react";
import { FaShare, FaRss, FaLink, FaPrint } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import * as agriculture from '../../data/agriculture.json';
import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import TabSwitcher from '../../components/Committees/TabSwitcher';
import {useRouter} from "next/router";

function CommitteePage({committeeData}) {
  const router = useRouter();
  if (router.isFallback) {
    return <CommitteeLayout>Loading...</CommitteeLayout>
  } else {
    const {
      name: committeeName,
      chamber,
      lpid,
      meetings,
    } = committeeData;
    return (
      <CommitteeLayout>
        <div className="title-bar">
          <h1>
            ({chamber.toUpperCase()[0]}) {committeeName}
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
        <TabSwitcher committeeLpid={lpid} meetings={meetings} />
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
}

export async function getStaticPaths() {
  let paths = [];

  // Since this will only be called once during build time we don't need the context
  const committee_api = "https://iaj822wghd.execute-api.us-east-1.amazonaws.com/test/GetCommittees";
  const response = await fetch(committee_api);

  if (response.status === 200) {
    const committees = await response.json();
    paths = committees.map(committee => ({
      params: {
        lpid: committee.lpid
      }
    }));
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({params}) {
  let committeeData;
  try {
    // TODO: Update this with actual API call
    const response = await fetch(`http://localhost:3004/committees?lpid=${params.lpid}`);
    if (response.status === 200) {
      committeeData = await response.json();
      committeeData = committeeData.length > 0 ? committeeData[0] : JSON.parse(JSON.stringify(agriculture));
    }
    else committeeData = JSON.parse(JSON.stringify(agriculture));
  } catch (Exception) {
    committeeData = JSON.parse(JSON.stringify(agriculture));
  }
  return {
    props: {
      committeeData,
    },
  };
}

export default CommitteePage;
