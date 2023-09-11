import React from 'react'
import Navigation from './Navigation'
import { Box } from './Box'
import { Labelfontstyleguide } from './Labelfontstyleguide'
import { Textweight } from './Textweight'
import { Dropdown } from './Dropdown'
import Checkradiobutton from './Checkradiobutton'
import Pagination from './Pagination'

const Home = () => {
  return (
    <>
    <Navigation/><div>
   {/*<h1 className='pt-11'> <Box/></h1>
    
     <Labelfontstyleguide/>
    // <Textweight/>
    // <Dropdown/>
  // <Checkradiobutton/>*/}
    <Pagination/>
    </div>

    </>
  )
}

export default Home
