/* eslint-disable no-throw-literal */
/* eslint-disable no-useless-constructor */
import React from "react";
class Hello extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      if(this.props.name === "error") {
         throw('Invoked error')
      }
      return (
         <h1>Hello, {this.props.name}</h1>
      );
   }
}
export default Hello;