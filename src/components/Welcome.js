import { Component } from "react";

//Props Practice in class components code Video ref 9 -props
class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
