import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Here are 2023’s top companies to watch", "Top news · 6,453 readers")}
        {newsArticle("India, a global manufacturing hub?", "2d ago · 2,138 readers")}
        {newsArticle("This week in newsletters", "3d ago · 1,258 readers")}
        
    </div>

  )
}

export default Widgets;