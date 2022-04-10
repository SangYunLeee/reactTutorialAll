import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";

import React, { Component } from "react";

class DogRoute extends Component {
  render() {
    const GetDog = (props) => {
      let { dogname } = useParams();
      console.log(this.props);
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === dogname.toLowerCase()
      );
      return <DogDetail {...props} dog={currentDog} />;
    };

    return (
      <Routes>
        <Route path="/" element={<DogList dogs={this.props.dogs} />} />
        <Route path="/dogs" element={<DogList dogs={this.props.dogs} />} />
        <Route path="/dog/:dogname" element={<GetDog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
}

export default DogRoute;
