import React from 'react';
import { Link } from "react-router-dom";
import { Button, Icon, useColorMode } from '@chakra-ui/react';
import { FaDumbbell } from 'react-icons/fa';
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  return (
<header className="navbar">
<div className="container">
<Link to= "/" className="logo">
<h1>GYM PAL  <Icon as={FaDumbbell} className='icon'/> </h1>
</Link>

<Link to={"/create"}>
  
<Button className="nav-button"
  leftIcon={<CiSquarePlus className='square'/>} >
 <h4 className='btn-text'> Add Workout </h4>
</Button>

    </Link>
</div>
</header>
  )
}

export default Navbar