// import React from "react";

// export default class MyComponent extends React.Component {
//   state = {
//     count: 0,
//     date: new Date(),
//   };

//   componentDidMount() {
//     const { count } = this.state;
//     document.title = `click ${count} time`;
//     setInterval(this.thik,1000);
//   }
//   componentDidUpdate() {
//     const { count } = this.state;
//     document.title = `click ${count} time`;
//   }

//   handelChange = () => {
//     this.setState(({ count }) => ({
//       count: count + 1,
//     }));
//   };

//   thik = () => {
//     this.setState({
//       date: new Date(),
//     });
//   };

//   render() {
//     const { date } = this.state;
//     return (
//       <div>
//         <p>Time :{date.toLocaleTimeString()}</p>
//         <button onClick={this.handelChange}>click</button>
//       </div>
//     );
//   }
// }
