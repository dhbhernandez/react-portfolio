import React from "react";
import img from '../../images/wDashboard.png'
import img2 from '../../images/wds.png'
import img3 from '../../images/chat-app.png'
import img4 from '../../images/note-taker.png'


function Portfolio() {
  return (
    <div className="wl container mb-5">
      <h1>Portfolio</h1>
      <div className="container mb-5">
                <main className="p-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://dhbhernandez.github.io/weatherDashBoard/">
                                <img className="img-thumbnail" src={img} alt="Weather-Dashboard" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://dhbhernandez.github.io/work-day-scheduler/">
                                <img className="img-thumbnail" src={img2} alt="wortk-day-scheduler" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://floating-thicket-44314.herokuapp.com/">
                                <img className="img-thumbnail" src={img3} alt="chat-app" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center">
                            <a href="https://note-taker-diego.herokuapp.com/notes">
                                <img className="img-thumbnail" src={img4} alt="note-taker" />
                            </a>
                        </div>
                    </div>

                    <hr />
                    <h3 className="text-center">More coming soon...</h3>
                </main>
            </div>
    </div>
  );
}

export default Portfolio;
