import React, {createContext} from "react";

export const Context = createContext(null);

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senate_standing_committees: [],
      house_standing_committees: [],
      interim_legislative_committees: [],
      interim_other_committees: [],
      conference_committees: []
    };
    fetch("http://localhost:3004/committees")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          senate_standing_committees: data.filter(
            committee => committee.type === "standing" && committee.chamber === "senate"
          ),
          house_standing_committees: data.filter(
            committee => committee.type === "standing" && committee.chamber === "house"
          ),
          interim_legislative_committees: data.filter(committee => committee.type === "interim" && committee.non_lsa_staffed === false),
          interim_other_committees: data.filter(committee => committee.type === "interim" && committee.non_lsa_staffed === true),
          conference_committees: data.filter(committee => committee.type === "conference")
        });
      });
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        setHouseStandingCommittees: (newValue) => this.setState({house_standing_committees: newValue}),
        setSenateStandingCommittees: (newValue) => this.setState({senate_standing_committees: newValue}),
        setInterimCommittees: (newValue) => this.setState({interim_committees: newValue}),
        setConferenceCommittees: (newValue) => this.setState({conference_committees: newValue}),
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}