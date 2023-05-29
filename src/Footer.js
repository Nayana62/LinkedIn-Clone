import React from 'react';
import './Footer.css';
import HeaderOption from './HeaderOption';

import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Footer() {
  return (
    <div className='footer'>
        <HeaderOption Icon={HomeIcon}  title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon}  title='My Network'/>
        {/* <HeaderOption Icon={AddBoxIcon}  title='Post'/> */}
        <HeaderOption Icon={NotificationsIcon}  title='Notifications'/>
        <HeaderOption Icon={ChatIcon}  title='Messaging'/>
        <HeaderOption Icon={BusinessCenterIcon}  title='Jobs'/>
    </div>
  )
}

export default Footer