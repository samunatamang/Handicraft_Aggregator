import React from 'react';
import {Link} from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
        <h4 className="text-center">
             Handicraft Nepal &copy; 2023
         </h4>
        <p className="text-center mt-3">
            <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
            <Link to="/policy">Privacy Policy</Link>

            </p>
    </div>
  );
};

export default footer;