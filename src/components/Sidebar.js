import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css"
export default function Sidebar() {
    return (
    <div class="sidebar">
        <div>
            <Link to="/"><img src="./images/UC-horz-rgb.jpg" alt="logo"/></Link>
        </div>
        
        <Link to="/Engineering">
            <div className="departments">
                <h2>Engineering</h2>
            </div>
        </Link>

        <Link to="/Business">
            <div className="departments">
                <h2>Business</h2>
            </div>
        </Link>

        <div className="departments">
            <h2>Science</h2>
        </div>

        <div className="departments">
            <h2>Arts</h2>
        </div>

        <div className="departments">
            <h2>Law</h2>
        </div>

        <div className="departments">
            <h2>Nursing</h2>
        </div>

        <div className="departments">
            <h2>Medicine</h2>
        </div>

        <div className="departments">
            <h2>Education</h2>
        </div>
    </div>
      );
}