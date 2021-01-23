import React from "react";
import img from '../../images/me2.jpeg'

function About() {
  return (
    
        <main>
          <div className="wl container mb-5">
            <h1>.</h1>
            <hr />
            <img className='img-thumbnail float-left m-3' src={img} alt="My picture"
                style={{width: '300px', height:'350px'}}/>


            <p>
                My name is Diego A. Hernandez. I am originally from Colombia. I have been living in the United States since August 2001,
                first I moved to Boston, to learn english. In January 2002, I moved to Houston, Texas. since then I have been living there.
                I graduated from high school in 2005. I tried going to school, but I had to work instead. After working in different jobs,
                I ended up working in the oilfield. I started working doing the Seismic for oil and gas companies for over 5 years.
                ended up traveling all over the USA. in 2015 when the oil market closed, I lost my job and found it pretty difficult to get
                back up, so I ended up getting a Commercial driver's license, hoping that I will be ok. After all this time I realized that
                I love working on computers, in fact I built my computer without knowing anything on how to build it. I realized how I love
                working in technology, so here I am trying to do my best to learn everything about programming. 
            </p>
            

                <p2>
                    If you are interested you can see my information 
                    <a className="linkedin" href="https://dhbhernandez.github.io/responsive-portfolio/contact.html">Here</a>
                </p2>

    </div>
        </main>
  );
}

export default About;
