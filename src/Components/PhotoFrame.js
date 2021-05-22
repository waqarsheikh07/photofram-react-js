import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhotoFrame = (props) => {
  return (
    <div>
      <Link className="add-item" to="/Addphoto"></Link>

      <div className="photo-grid">
        {props.photoBlock
          .sort(function (a, b) {
            return b.id - a.id;
          })

          .map((photo, index) => (
            <Photo
              key={index}
              onPhotoRemoved={props.onPhotoRemoved}
              finalPhoto={photo}
            ></Photo>
          ))}
      </div>
    </div>
  );
};
PhotoFrame.propTypes = {
  photoBlock: PropTypes.array.isRequired,
  onPhotoRemoved: PropTypes.func.isRequired,
};
export default PhotoFrame;
