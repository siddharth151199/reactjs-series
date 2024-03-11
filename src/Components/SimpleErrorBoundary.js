import React, {Component} from "react";

class SimpleErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }
   static getDerivedStateFromError(error) {
      return { hasError: true };
   }
   componentDidCatch(error, errorInfo) {
      console.log(error);
      console.log(errorInfo);
   }
   render() {
      if (this.state.hasError) {
         return <h1>Please contact the 
            administrator.</h1>;
      }
      return this.props.children;
   }
}
export default SimpleErrorBoundary;