import React from "react";
import icon1 from "../../../images/Tour Collection/map.png";
import icon2 from "../../../images/Tour Collection/adventurous (1).png";
import travel from "../../../images/about-one-img-1.png";

const TravelArragement = () => {
  return (
    <div style={{ backgroundColor: "#FAF5EE" }} className="pt-5">
      <h4 style={{ color: "#E8604C" }} className="text-center fw-bold">
        We Are Specialized In
      </h4>
      <h1
        style={{ color: "#212121" }}
        className="text-center mb-3 fw-bold mt-3"
      >
        Tour & Travel Arrangement
      </h1>
      <div className="container">
        <div className="row p-5 d-flex justify-content-center align-items-center">
          <div className="col col-12 col-md-6 pe-5 mb-5">
            <div>
              <img className="img-fluid" src={travel} alt="" />
            </div>
          </div>
          <div className="col col-12 col-md-6 ps-5 mb-3">
            {/* <h4 style={{ color: "#E8604C" }} className="text-center fw-bold">
              We Are Specialized In
            </h4>
            <h1
              style={{ color: "#212121" }}
              className="text-center mb-3 fw-bold mt-3"
            >
              Tour & Travel Arrangement
            </h1> */}
            <div className="d-flex">
              <div>
                <img style={{ width: "50px" }} src={icon1} alt="" />
              </div>
              <div>
                <h4 className="fw-bold mt-3 ms-4">
                  We Can Be A Great Travel Planner For You
                </h4>
                <p className="text-black-50 mb-4 text-center ms-4">
                  It is an adventure you’ve always dreamt of, but haven’t been
                  able to plan and execute properly. Here are some useful
                  pointers on how to plan a trip, that put an end to the
                  cluttered chaos by your vacations to perfect harmony and pure
                  bliss during on a vacation.
                </p>
              </div>
            </div>
            <div className="d-flex align-item-center">
              <div>
                <img style={{ width: "50px" }} src={icon2} alt="" />
              </div>
              <div>
                <h4 className="fw-bold mt-2 ms-4">
                  We Guide You All Over The World
                </h4>
                <p className="text-black-50 text-center ms-4">
                  Vacations often start off as a wonderful idea and then
                  eventually end up being a nightmare to manage. Often
                  overlooked, a lot of thought and brainstorming goes into
                  perfectly organizing touring plans. The lack of know-how on
                  how to plan a trip often reflects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelArragement;
