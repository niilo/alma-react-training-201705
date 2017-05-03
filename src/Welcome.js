import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () =>
  <div>
    <p>Welcome to the Awesome todo app!</p>
    <Link to="/todos" className="btn btn-info">
      Go to todo-list
    </Link>
  </div>

export default Welcome;
