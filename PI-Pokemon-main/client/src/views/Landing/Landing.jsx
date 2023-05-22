import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "../../components/Landing_components/LandingPage";

function Landing() {
  return (
    <div>
      <LandingPage />
      <section>
        <Link to="/home">
          <button>
            <h1>a Home</h1>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Landing;
