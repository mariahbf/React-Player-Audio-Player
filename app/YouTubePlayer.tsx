'use client'

import { Button, Stack } from "@mui/material";
import React, { LegacyRef } from "react";
import ReactPlayer from "react-player";
export interface IYouTubePlayerProps {
    playing:boolean
    videoUrl?:string
    setPlayed:(prog: number)=>void
}

export const YouTubePlayer = ({playing, videoUrl, setPlayed}:IYouTubePlayerProps) => {
    return (
        <Stack>
             <ReactPlayer url={videoUrl} playing={playing} onProgress={(progress) => {
       setPlayed(progress.playedSeconds);
     }}/>
        </Stack>
    );
    
}
