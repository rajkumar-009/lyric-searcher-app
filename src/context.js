// To define context so that states can be used across components
import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Results",
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks in the US",
    dispatch: (action) => this.setState((state) => reducer(state, action)), // Dispatch function is to add a reducer so that the state can be modified
  };

  // The get request to obtain tracklist from musixmatch. https://cors-anywhere.herokuapp.com/ acts as a proxy server to bypass cors blocking
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MX_KEY}`
      )
      .then((res) => {
        //console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
