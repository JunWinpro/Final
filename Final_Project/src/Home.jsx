import React from 'react'
import {Button} from 'antd'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Home = () => {
    const location = useLocation();
  return (
    <>
        <NavLink to="/"><Button>All</Button></NavLink>
        <NavLink to="/actives"><Button>Active</Button></NavLink>
        <NavLink to="/completed"><Button>Completed</Button></NavLink>
    </>
  )
}

export default Home