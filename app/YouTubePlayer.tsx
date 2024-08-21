'use client'

import { Button, Stack } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
export interface IYouTubePlayerProps {
    playing:boolean
}

export const YouTubePlayer = ({playing}:IYouTubePlayerProps) => {
    return (
        <Stack>
             <ReactPlayer url="https://www.youtube.com/watch?v=kM8crupu9DM&pp=ygUJbWVkaXRhY2Fv" controls={false} playing={playing}/>
        </Stack>
       
    );
    
}
