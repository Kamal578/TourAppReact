import React from 'react'
import { ReactComponent as PlayButton } from "../../assets/icons/YouTubePlayButton.svg";

function Video() {
  return (
    <>
    <a href="https://www.youtube.com/watch?v=0jK0ytvjv-E">
        <div className='bg-videoBg bg-cover h-[50vh] flex items-center justify-center'>
            <PlayButton style={{width: "5em"}}/>
        </div>
    </a>
    </>
  )
}

export default Video