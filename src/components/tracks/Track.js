// Track component for each Track
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Track = (props) => {
  // props from Tracks.js
  const { track } = props; // destructuring track details from props
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i>Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i>
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.commontrack_id}`}
            className="btn btn-secondary btn-block"
          >
            <i className="fas fa-chevron-right"></i>&nbsp;View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

//Proptypes
Track.propTypes = {
  track: PropTypes.object.isRequired,
};
export default Track;
