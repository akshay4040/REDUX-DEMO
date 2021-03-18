
import React from "react";
import Contact from "./Contact"
import PhoneApp from "./Phoneapp"

const App = () => {
  return (
    <div className="container">
      <Contact></Contact>
      <br />
      <div>
        <PhoneApp></PhoneApp>
      </div>
  
    </div>
  );
};
export default App;




// counter app.js

// import React from "react";
// import Counter from "./Containers/Counter";
// import AddCounter from "./Containers/AddCounter";
// import RemoveCounter from "./Containers/RemoveCounter";

// const App = () => {
//   return (
//     <div className="container">
//       <Counter></Counter>
//       <br />
//       <div className="columns">
//         <div className="column is-11">
//           <AddCounter></AddCounter>
//         </div>
//         <div className="column auto">
//           <RemoveCounter></RemoveCounter>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;



// import './App.css';
// import React, { Component } from 'react';
// import Demo from "./Demo"

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() {
//     return (
//       <div >
//       <Demo />
//     </div>
//      );
//   }
// }

// export default App;
