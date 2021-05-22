import React, { Component } from "react";
import PropTypes from "prop-types";
const Photo = (props) => {
  const frame = props.finalPhoto;
  return (
    <figure className="figure-style">
      <img className="photo" src={frame.imageLink} alt={frame.description} />
      <figcaption>
        <p className="fig-caption">{frame.description}</p>
      </figcaption>

      <div className="button-container">
        <button
          onClick={() => {
            console.log("my photo");
            props.onPhotoRemoved(frame);
          }}
          className="button-style"
        >
          Remove
        </button>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  onPhotoRemoved: PropTypes.func.isRequired,
  finalPhoto: PropTypes.object.isRequired,
};
export default Photo;
