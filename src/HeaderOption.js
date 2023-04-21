import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { purple } from '@mui/material/colors'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({avatar, Icon, title, onClick}) {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
       {Icon && <Icon className='headerOption__icon'/>}
            {avatar && (
            <Avatar sx={{ bgcolor: purple[500] }} className='headerOption__icon'>{user?.displayName[0]}</Avatar>)}
       <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption