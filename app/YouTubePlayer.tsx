import { Stack } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
export interface IYouTubePlayerProps {
    playing:boolean
    videoUrl?:string
    setPlayed:(prog: number)=>void
}

export const YouTubePlayer = ({playing, videoUrl, setPlayed}:IYouTubePlayerProps) => {
    return (
        /* player wrapper to get a responsive player */
        <div className='player-wrapper'>
            <ReactPlayer width={'100%'} height={'100%'} url={videoUrl} playing={playing} onProgress={(progress) => {
            setPlayed(progress.playedSeconds);
            }}/>
        </div>
    );
    
}
