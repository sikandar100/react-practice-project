import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitors",
    };
  }
  //message state changing function. to see the full explanation watch the video#10
  changeMesage(){
      this.setState({
          message:"Thankyou for the Sub!"
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMesage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
