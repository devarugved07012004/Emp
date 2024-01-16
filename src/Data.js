import React from 'react';

const App = (props) => {
  return (
    <>
      {/* Importing or including the header component */}
      {/* Consider linking the Bootstrap stylesheet in the main HTML file of your React app */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

      <style>
        {`
          body {
            background-image: linear-gradient(to right, white, blue);
          }
        `}
      </style>

      {/* Main content */}
      <div className="container pt-5 pb-5">

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Travel Expense</th>
              <th scope="col">Telecom Expense</th>
              <th scope="col">Total Expenses</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.phoneno}</td>
                <td>{item.travelexp}</td>
                <td>{item.telecomexp}</td>
                <td>{item.totalexp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Importing or including the footer component */}
      {/* Make sure to include the necessary scripts and libraries in your main HTML file */}
    </>
  );
}

export default App;
