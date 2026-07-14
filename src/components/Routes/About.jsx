// import AboutClass from "./AboutClass";

// const About = ()=>{

//     return(
//         <div className="About-Container">
//         <h1>About</h1>
//         <h2>This is shahzad learning React</h2>

//         <AboutClass name={"Shahzad learning react"} adress={"Shor kot city"}/>
//         </div>

//     )
// }

import UserContext from "../../../public/utils/userContext";
import AboutClass from "./AboutClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componetDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div className="About-Container">
        <h1>About</h1>
        <h2>This is shahzad learning React</h2>
        <div className="font-bold">
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1> ({loggedInUser}) </h1>}
          </UserContext.Consumer>
        </div>

        <AboutClass name={"First "} adress={"Shor kot city"} />
      </div>
    );
  }
}

export default About;
