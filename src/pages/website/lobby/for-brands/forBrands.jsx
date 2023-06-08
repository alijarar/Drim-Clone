import React from "react";
import "./forBrands.css";

function ForBrands() {
  return (
    <>
      <div
        className="block-margin container"
      >
        <div
          className="title-drim  text-drim-blue text-uppercase"
        >
          For Brands
        </div>
        <div className="row mb-80">
          <div
            className="drim-h1 mt-24 col-lg-8 col-md-10 "
          >
            Pay influencers only when you get results
          </div>
        </div>
        <div
          className="row block-description-text justify-content-between"
        >
          <div className="col-md-5 drim-h5 " >
            Influencers are a performance-marketing channel
          </div>
          <div
            className="col-md-6 mt-8 title-drim "
          >
            Our flagship analytical system will find the top-performing
            influencers across 8 social networks within a database of 250k+
            micro-influencers. Our 500+ managers will assist them to deliver
            results and scale your campaigns.
          </div>
        </div>
      </div>
      <div
        className="drim-video-block mb-80"
      >
        <div className="container container-video ">
          <div className="drim-video-youtube">
            <div className="ratio ratio-16x9">
              <div id="player-2"></div>
              <div
                className="video-to-play"
                data-id="player-2"
              >
                <img
                  src="https://drim.one/img/video-banner-brands.jpg"
                  alt=""
                  className="d-block w-100"
                ></img>
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M86.328 24.744C85.408 21.304 82.696 18.592 79.256 17.672C73.016 16 48 16 48 16C48 16 22.984 16 16.744 17.672C13.304 18.592 10.592 21.304 9.672 24.744C8 30.984 8 48 8 48C8 48 8 65.016 9.672 71.256C10.592 74.696 13.304 77.408 16.744 78.328C22.984 80 48 80 48 80C48 80 73.016 80 79.256 78.328C82.7 77.408 85.408 74.696 86.328 71.256C88 65.016 88 48 88 48C88 48 88 30.984 86.328 24.744ZM40 58.392V37.608C40 36.068 41.668 35.108 43 35.876L61 46.268C62.332 47.036 62.332 48.964 61 49.732L43 60.124C41.668 60.896 40 59.932 40 58.392Z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="block-margin container"
      >
        <div className="row mb-80">
          <div
            className="drim-h1 mt-24 col-lg-8 col-md-10"
          >
            Get sales while best-in-class analytics do the rest
          </div>
        </div>
        <div
          className="prev-accordion-text snipcss0-3-5-6 "
        >
          <div
            className="lead-text-m snipcss0-4-6-7"
          >
            With our 250k+ micro-influencers you can choose from a variety of
            payment models and control the ROI on your campaigns
          </div>
          <div
            className="buttons-block mt-24 snipcss0-4-6-8 snipcss0-0-0-1"
          >
            <a
              href="/brief"
              className="button-drim button-drim-blue snipcss0-5-8-9"
            >
              Get started — it’s free
            </a>
            <a
              href="/brands"
              className="button-drim button-drim-default snipcss0-5-8-10"
            >
              Learn more
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.84999C16.55 8.52999 16.01 8.75999 16.01 9.19999V11Z"
                  fill="#000000"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="drim-numbers bg-drim-blue block-padding"
      >
        <div className="container">
          <div
            className="drim-h3 text-white text-uppercase"
          >
            DRIM for brands
          </div>
          <div className="drim-numbers-box mt-40">
            <div className="drim-number-item ">
              <div
                className="drim-h2 text-drim-blue text-uppercase"
              >
                250K+
              </div>
              <div className="title-drim mtop-4 ">
                Micro-influencers on the platform
              </div>
            </div>
            <div className="drim-number-item">
              <div
                className="drim-h2 text-drim-blue text-uppercase"
              >
                12MLN
              </div>
              <div className="title-drim mtop-4 ">
                Leads and sales generated for clients
              </div>
            </div>
            <div className="drim-number-item ">
              <div
                className="drim-h2 text-drim-blue text-uppercase "
              >
                500
              </div>
              <div className="title-drim mtop-4 ">
                Influence Marketing Managers
              </div>
            </div>
            <div className="drim-number-item  ">
              <div
                className="drim-h2 text-drim-blue text-uppercase "
              >
                180+
              </div>
              <div className="title-drim mtop-4 ">
                Happy clients with always-on campaigns
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForBrands;
