import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 fixed-bottom">
      <div className="container text-center">
        <p>&copy; 2024 Expense Management System</p>
        <p className="mb-0">Designed by <i className="fas fa-heart text-danger">Team 565</i></p>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <html lang="en">
      <body>

        <Footer />

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6bym9a6dAqLFeuEL+st+J94jqDltHt+v5sFnp" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}

export default App;
