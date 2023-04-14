import React from 'react';
import './Home.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';





const Home = () => {
  return (
    <div>
      <Header></Header>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
      
    </div>
  );
};

export default Home;

