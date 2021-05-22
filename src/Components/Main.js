import React, { Component } from "react";
import Title from "./Title";
import PhotoFrame from "./PhotoFrame";
import Addphoto from "./Addphoto";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [
        {
          id: 1,
          description: "beautiful sea",
          imageLink: "https://picsum.photos/800/600?image=14",
        },
        {
          id: 2,
          description: "Coffee cup",
          imageLink: "https://picsum.photos/800/600?image=30",
        },
        {
          id: 3,
          description: "Freedom",
          imageLink: "https://picsum.photos/800/600?image=50",
        },
        {
          id: 4,
          description: "Farm",
          imageLink: "https://picsum.photos/800/600?image=85",
        },
      ],
    };
    this.removePhoto = this.removePhoto.bind(this);
  }
  removePhoto(removeFrame) {
    this.setState((state) => ({
      allPhotos: state.allPhotos.filter((photo) => photo !== removeFrame),
    }));
  }
  addPhoto(photoBlock) {
    this.setState((state) => ({
      allPhotos: state.allPhotos.concat([photoBlock]),
    }));
    console.log(this.state.allPhotos);
  }
  render() {
    return (
      <div>
        <Route exact path="/">
          <Title title={"PhotoFrame"}></Title>
          <PhotoFrame
            photoBlock={this.state.allPhotos}
            onPhotoRemoved={this.removePhoto}
          />
        </Route>
        <Route
          exact
          path="/Addphoto"
          render={({ history }) => (
            <Addphoto
              onAddPhoto={(newPhoto) => {
                this.addPhoto(newPhoto);
                history.push("/");
              }}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default Main;
