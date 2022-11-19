import React from 'react';
import logo from '../images/info.png';
import logo2 from '../images/info2.png';

const InfoPage = () => (
    <>
    <h1>Infographic</h1>
    <p>
      Research Project Infographics
    </p>
    <h3>The Infographic of the Research Project Roadmap</h3>
    <img src={logo} className="photo" alt="Logo" />
    <span>References: 
    Verschuren, P., Doorewaard, H. and Mellion, M., 2010. Designing a research project (Vol. 2). The Hague: Eleven International Publishing.
    </span>
    <h3>The Infographic of the Research Project Phases</h3>
    <img src={logo2} className="photo2" alt="Logo" />
    <span>Eby, K. (2021). How to Measure Project Success | Smartsheet. [online] www.smartsheet.com. Available at: https://www.smartsheet.com/content/measuring-project-success. Accessed on: November 12, 2022.</span>
    </>
);

export default InfoPage;