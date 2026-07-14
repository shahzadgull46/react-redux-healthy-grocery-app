import React from "react";
class AboutClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
       
      },
    };
   
    // console.log(this.props.name +" constructor")
  }

             // Api call
  // async componentDidMount() {
  // const data = await fetch("https://api.github.com/users/shahzadgull46")
  // const json = await data.json()
  // this.setState({
  //   userInfo:json,
  // })
  // console.log(json)
   
  // }

  

 componentDidMount() {
            
    // console.log("Child component didMount")
    // this.timer =setInterval(() => {
    //   console.log("Hello shahzad learner")
    // }, 1000);
  }

  
  componentDidUpdate(){
   
    console.log("componetDidUpdate called")
  }
componentWillUnmount(){
  clearInterval(this.timer)
  console.log("componentWillUnmount called")
}
  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="about-us">
        <h1>This is grocerry Application </h1>
        <h2>Working on it without any team</h2>
        <h3 className="text-purple-500"><b>Name: {name}</b></h3>
        <h3 className="text-purple-500"><b>Location: {location}</b></h3>
      </div>
    );
  }
}

export default AboutClass;
