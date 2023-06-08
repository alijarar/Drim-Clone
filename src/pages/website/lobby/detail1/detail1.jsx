import React from "react";
import "./detail1.css";

function Detail1() {
  return (
    <>
      <div className="drim-hero container1">
        <div className="row hero-reverse hero-main">
          <div className="col-md-6">
            <div className="hero-title drim-h1">
              DRIM generates sales to brands via micro-influencers
            </div>
            <div className="hero-subtitle-text drim-h6">
              Generate sales, attract customers and increase brand awareness.
              <span className="font-weight-500">Pay only for results</span>
            </div>
            <div className="buttons-block">
              <a
                // href="/brief"
                className="button-drim button-drim-blue"
              >
                I’m a Brand
              </a>
              <a
                // href="https://dash.drim.one/signup/blogger"
                className="button-drim button-drim-purple"
              >
                I’m a Creator
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.84999C16.55 8.52999 16.01 8.75999 16.01 9.19999V11Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-6 hero-img-block hero-img-block-mainpage">
            {/* <Image
              class="iphone-mask h-auto d-none style-AKerm"
              src={image1}
              alt="iphone-mask"
              id="style-AKerm"
              width={100}
              height={100}
            ></Image> */}
            <>
              <video
                preload="metadata"
                controls
                className="d-block w-100 h-100 hero-video style-AofP5"
                autoPlay=""
                muted=""
                playsinline=""
                webkit-playsinline=""
              >
                <source
                  src="https://drim.one/videos/homepage.mp4"
                  type="video/mp4"
                ></source>
                <source
                  src="https://drim.one/videos/main_drim.webm"
                  type="video/webm"
                ></source>
                Sorry, your browser doesn't support embedded videos.
              </video>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail1;
