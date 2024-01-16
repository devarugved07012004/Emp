import React from 'react';

const Home = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <div className="jumbotron bg-info">
        <div className="container">
          <div style={{ width: '50%', margin: '0 auto' }}>
            <h1 className="pb-2 pt-4 text-center">Employee Expense Management</h1>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <a href="/submit" className="btn btn-primary btn-lg btn-block">
                ADD EXPENSE
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <a href="/data" className="btn btn-danger btn-lg btn-block">
                SHOW EXPENSE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
