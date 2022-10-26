import React from "react"

function Bootstrap() {
  return <div className="main-container">
    <div className="video-gallery-container">
      <h2 className="title"> HTML and CSS crash course</h2>
      <div className="video-gallery">
        <div className="featured-video">
          <div className=" header video-title"> Introduction</div>

          <div className="responsive-iframe">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hu-q2zYwEYs?rel=0"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Bootstrap;
