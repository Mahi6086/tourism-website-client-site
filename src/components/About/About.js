import React from "react";
import "./About.css";
import about from "../../images/about/destination-5.jpg";
const About = () => {
  return (
    /* style={{ backgroundColor: "#FAF5EE" }} */
    <div style={{ backgroundColor: "#FAF5EE" }}>
      <div className="container pt-5">
        <div>
          <h4 style={{ color: "tomato" }} className="text-center fw-bold">
            Why Choose Us
          </h4>
          <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
            We Care About Our Traveller <br />
            With Top Priority
          </h1>
          <p className="text-black-50 text-center mb-4">
            Tevily is here to help you travel the world with cheap flights,
            discount hotels, and <br />
            train tickets. Looking to find great travel deals or enjoy the
            biggest savings on your next trip?
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Save on Travel with Tevily
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-black-50">
                    <strong>
                      Tevily is a rapidly-growing global online travel agency,
                    </strong>{" "}
                    Tevily is here to help you plan the perfect trip. Whether
                    you're going on holiday, taking a business trip, or looking
                    to set up a corporate travel account, Tevily is here to help
                    you travel the world with cheap flights, discount hotels,
                    and train tickets. Looking to find great travel deals or
                    enjoy the biggest savings on your next trip? Tevily has you
                    covered. With our easy-to-use website and app, along with
                    24-hour customer service, booking your next trip couldn't be
                    simpler. With Tevily, quality travel services in over a
                    dozen languages including English, Mandarin, Cantonese,
                    Japanese, Korean, German, French, and Spanish are just a
                    call—or click—away.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Easily Customize Your Trip with the Best Hotel and Flight
                    Deals
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    It's easy to customize your travel experience with our
                    robust flight and hotel search filter options and Tevily
                    travel tools like flight fare alerts, deal-finder calendar,
                    and early bird deals. Tevilys secure payment system takes
                    the stress out of travel by providing easy payment options,
                    including credit and debit cards, and UnionPay.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Featured Hotel Destinations
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Hotels in Shanghai | Hotels in Beijing | Hotels in Guangzhou
                    | Hotels in Shenzhen | Hotels in Hangzhou | Hotels in Xiamen
                    | Hotels in Chengdu | Hotels in Hong Kong | Hotels in Macau
                    | Hotels in Tokyo | Hotels in Osaka | Hotels in Kyoto |
                    Hotels in Fukuoka | Hotels in Sapporo | Hotels in Seoul |
                    Hotels in Taipei | Hotels in Singapore | Hotels in Kuala
                    Lumpur | Hotels in Bangkok | Hotels in Da Nang
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Featured Tours & Tickets
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Shanghai Disneyland Ticket | Forbidden City Ticket |
                    Terracotta Warriors Ticket | Sichuan Opera Show Ticket |
                    Universal Orlando Ticket | Legoland Florida Ticket |
                    Antelope Canyon Ticket | Empire State Building Observation
                    Deck Ticket | Statue of Liberty Cruise | Kualoa Ranch Day
                    Tour
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Featured Flight Destinations
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse text-info fw-bolder"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Flights to Cebu | Flights to Jakarta | Flights to Hanoi |
                    Flights to Chengdu | Flights to Phuket | Flights to Macau |
                    Flights to Ho Chi Minh | Flights to Osaka | Flights to
                    Shenzhen | Flights to Shanghai | Flights to Beijing |
                    Flights to Hong Kong | Flights to Seoul | Flights to Bangkok
                    | Flights to Taipei | Flights to Singapore | Flights to
                    Tokyo | Flights to Manila | Flights to Guangzhou | Flights
                    to Kuala Lumpur
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Featured Travel Guide
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse text-info fw-bolder"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    VTL Flights to Singapore | 2021 Chinese Public Holiday
                    Calendar | Top 10 to Know before Booking the Cosmopolitan of
                    Las Vegas | Tevily Hotel coupons and discounts 2021 | ⚡ 50%
                    off Tevily Flight Deals 2021 | Things to do & Best
                    All-Inclusive Resorts on Isla Mujeres | 2021 Tevily promo
                    code, discount code, coupon | 2021 USA Federal Holidays |
                    List of United States Federal Holidays 2022 | How to Explore
                    World's Largest Universal Studios Beijing | Bank Holiday
                    2021 in the United Kingdom | All You Need to Know about NHS
                    COVID Passport
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Tevily Links
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse text-info fw-bolder"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Tevily App Android | Tevily App iOS | Tevily on Twitter |
                    Tevily on Facebook | Tevily reviews | Hotels Near Me |
                    Covid-19 Travel Restrictions| 2021 USA Federal Holidays|
                    Tevily promo code
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed text-info fw-bolder"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Links
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse text-info fw-bolder"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">frontier airlines</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-5 about-img">
            <img className="h-100 ms-lg-3 rounded-3 img" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
