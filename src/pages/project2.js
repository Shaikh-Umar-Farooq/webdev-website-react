import React from "react"

function Project2() {
  return <div className="main-container">
    <div className="video-gallery-container">


      <div className="video-gallery" style={{ marginTop: "80px" }}>
        <div className="featured-video">
          <div className="header video-title onlyonevideo">

            A Landing Page using Bootstrap 5

          </div>
          <div className="video-container">
            <div className="responsive-iframe ">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1v_XcJsGtyA?rel=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>


        </div>


      </div>
    </div>
  </div>;
};

export default Project2;
