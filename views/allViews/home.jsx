var React = require("react");

class Home extends React.Component {
  render() {
  
    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
          <div className="container text-center mt-5">
         
          <h3 className="display-3 border-bottom">Welcome to MyTripPlanner {this.props.result.name}</h3>
         
         <div className="btn_container mt-5">
         <a href="/addtrip" className="btn btn-primary">Add A Trip</a>


        <a href="/allTrips" className="btn btn-primary ml-4">See All Trips</a>
         </div>
          
        
        
          </div>
          
        </body>
      </html>
    );
  }
}

module.exports = Home;
