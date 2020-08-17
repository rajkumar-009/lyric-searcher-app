import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

// The Consumer component is imported from context. It provides access to the shared state which is passes as a "value" prop from context.js
class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value; //Destructuring tracklist and heading from value
          console.log(value);
          if (track_list === undefined || track_list.length === 0) {
            //checking to see if array loaded or not. If not show spinner gif.
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map((item) => (
                    <Track key={item.track.track_id} track={item.track} /> // For each track display a track component
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
