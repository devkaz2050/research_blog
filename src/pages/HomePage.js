import React from 'react';
import logo from '../images/info.png';
const HomePage = () => (
    <>
    <h1>Hello, welcome to my DataScience blog!</h1>
    <p>
        Welcome to my blog! Welcome to my data science blog!

        As part of the course in Research Project Management, this web page will discuss my approach, how research results will be evaluated,
         what research methodology and related tools will be used.
    </p>
    <img src={logo} className="photo" alt="Logo" />
    </>
);

export default HomePage;