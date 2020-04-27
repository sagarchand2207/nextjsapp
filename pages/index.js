import React, { Component, PureComponent } from "react";
import bg1 from "../static/images/bg_1.jpg";
import bg2 from "../static/images/bg_2.jpg";
import { requestMenuList } from "../redux/actions";
import { connect } from "react-redux";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.timer = null;
    this.options = {
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    };
  }
  componentDidMount() {
    this.props.requestMenuList();
        this.timer = setInterval(
      () => {
        this.makeTimer()
      },
      1000
    );
  }

  makeTimer = () => {
    var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="">
        <main>
          <Navbar/>
          <section id="home-section" className="hero js-fullheight">
            <h3 className="vr">
              <span>Welcome</span> to MeetUp.
            </h3>
            <div id="timer" className="text-center">
              <div className="time" id="days">
                {days}
                <span>Days</span>
              </div>
              <div className="time" id="hours">
                {hours}
                <span>Hours</span>
              </div>
              <div className="time" id="minutes">
                {minutes}
                <span>Minutes</span>
              </div>
              <div className="time" id="seconds">
                {seconds}
                <span>Seconds</span>
              </div>
            </div>
            <ImageCarousel
              className=" owl-carousel home-slider js-fullheight"
              options={this.options}
            >
              <div className="slider-item js-fullheight">
                <div className="overlay"></div>
                <div className="container-fluid px-0">
                  <div
                    className="row d-md-flex no-gutters slider-text js-fullheight align-items-end justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <div
                      className="first-carousel one-third order-md-last js-fullheight img"
                      // style="background-image:url(images/bg_1.jpg);"
                      style={{
                        backgroundImage: `url(${bg1})`,
                      }}
                    >
                      <div className="overlay"></div>
                    </div>
                    <div
                      className=" one-forth js-fullheight d-flex align-items-start align-items-md-center ftco-animate"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className=" text mt-4 mt-md-0">
                        <h1 className=" mb-4">
                          Annual <span>Conference</span> 2019
                        </h1>
                        <h2 className=" mb-4">
                          November 26-30, 2019 - 08:00am-12:00pm
                        </h2>
                        <p>
                          <a href="#" className=" btn btn-primary py-3 px-4">
                            Get Ticket
                          </a>{" "}
                          <a href="#" className=" btn btn-white py-3 px-4">
                            Watch Video
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider-item js-fullheight">
                <div className="overlay"></div>
                <div className="container-fluid px-0">
                  <div
                    className="row d-flex no-gutters slider-text js-fullheight align-items-end justify-content-end"
                    data-scrollax-parent="true"
                  >
                    <div
                      className="second-carousel one-third order-md-last js-fullheight img"
                      // style="background-image:url(images/bg_2.jpg);"
                      style={{
                        backgroundImage: `url(${bg2})`,
                      }}
                    >
                      <div className="overlay"></div>
                    </div>
                    <div
                      className="one-forth js-fullheight d-flex align-items-start align-items-md-center ftco-animate"
                      data-scrollax=" properties: { translateY: '70%' }"
                    >
                      <div className="text mt-4 mt-md-0">
                        <h1 className="mb-4">
                          Business <span>Conference</span> 2019
                        </h1>
                        <h2 className="mb-4">
                          November 26-30, 2019 - 08:00am-12:00pm
                        </h2>
                        <p>
                          <a href="#" className="btn btn-primary py-3 px-4">
                            Get Ticket
                          </a>{" "}
                          <a href="#" className="btn btn-white py-3 px-4">
                            Watch Video
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ImageCarousel>
          </section>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    navItems: state.nav,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    requestMenuList: () => dispatch(requestMenuList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
