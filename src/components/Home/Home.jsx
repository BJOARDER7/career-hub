import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import JobCategories from '../JobCategories/JobCategories';



const Home = () => {
  return (
    <div className='m-10'>
      <Navbar></Navbar>
      <Header></Header>
      <JobCategories></JobCategories>
    </div>
  );
};

export default Home;