import React, {createContext} from "react";

export const Context = createContext(null);

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
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