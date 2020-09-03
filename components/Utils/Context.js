import React, {createContext} from "react";

const namesort = (a, b) => {
  let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const conference_namesort = (a, b) => {
  let nameA = parseInt(a.name.split(" ")[4]); // ignore upper and lowercase
  let nameB = parseInt(b.name.split(" ")[4]); // ignore upper and lowercase
  return nameA - nameB;
};

export const Context = createContext(null);

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      committees: [],
      senate_standing_committees: [],
      house_standing_committees: [],
      interim_legislative_committees: [],
      interim_other_committees: [],
      conference_committees: [],
      committee_active: "",
      committee_filter: ""
    };

    const committee_api = "https://iaj822wghd.execute-api.us-east-1.amazonaws.com/test/GetCommittees";
    const local_api = "http://localhost:3004/committees";

    fetch(committee_api)
      .then(response => response.json())
      .then(committees => {
        this.setState({
          committees: committees,
          senate_standing_committees: committees.filter(
            committee => committee.type === "standing" && committee.chamber === "senate"
          ).sort(namesort),
          house_standing_committees: committees.filter(
            committee => committee.type === "standing" && committee.chamber === "house"
          ).sort(namesort),
          interim_legislative_committees: committees.filter(
            committee => committee.type === "interim" && committee.non_lsa_staffed === false
          ).sort(namesort),
          interim_other_committees: committees.filter(
            committee => committee.type === "interim" && committee.non_lsa_staffed === true
          ).sort(namesort),
          conference_committees: committees.filter(committee => committee.type === "conference").sort(conference_namesort)
        });
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        setCommittees: (newValue) => this.setState({committees: newValue}),
        setHouseStandingCommittees: (newValue) => this.setState({house_standing_committees: newValue}),
        setSenateStandingCommittees: (newValue) => this.setState({senate_standing_committees: newValue}),
        setInterimLegislativeCommittees: (newValue) => this.setState({interim_legislative_committees: newValue}),
        setInterimOtherCommittees: (newValue) => this.setState({interim_other_committees: newValue}),
        setConferenceCommittees: (newValue) => this.setState({conference_committees: newValue}),
        setCommitteeActive: (newValue) => this.setState({committee_active: newValue}),
        setCommitteeFilter: (newValue) => this.setState({committee_filter: newValue}),
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}