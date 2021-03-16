import React from "react";
import Projects from "../../components/projects";
import Vivek from "../images/vivek.jpeg";
import Skills from "../../components/skills";
import "../../main.css";
import Intro from "../../components/intro";

export default function Home({ data }) {
  return (
    <React.Fragment>
      <Intro />
      <Skills />
      <br />
      <div className="projects">
        <h1>My Recent Work</h1>
        <Projects />
      </div>
      <div className="projects" style={{ margin: "80px 0" }}>
        <h2>Intrested in collboraton ?</h2>
        <p>
          I'm always ready to invest my time on new intresting projects and
          opportunities.
        </p>
        <a
          className="visit-site"
          href="mailto:vivekyeskashyap@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 style={{ color: "white" }}>Start a conversation</h3>
          <span>
            <svg
              className="mail-me"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              ></path>
            </svg>
          </span>
        </a>
      </div>
      <footer>
        <img className="vivek-image" src={Vivek} alt="Vivek S" />
        <div className="projects">
          <h1 className="sign" style={{ color: "white" }}>
            Vivek S
          </h1>
          <h4 style={{ color: "white" }}>
            Learn, let learn.. Grow, let grow..
          </h4>
          <p
            style={{ color: "white", fontSize: "small", fontWeight: "lighter" }}
          >
            Handcrafted by me{" "}
            <svg
              class="mail-me"
              style={{ width: "15px" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="copyright"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"
              ></path>
            </svg>
            <b style={{ color: "white" }}>Vivek Kashyap</b>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}
