'use client'
import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { LegacyRef, useState } from 'react'
import { SoundCloudPlayer } from "./SoundCloudPlayer";
import { MixCloudPlayer } from "./MixCloudPlayer";
import { YouTubePlayer } from "./YouTubePlayer";
import { AudioImage } from "./AudioImage";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import { useRef } from "react";
import { Background } from "./Backgorund";
import { CustomRoundButton } from "./CustomRoundButton";
import ReactPlayer from "react-player";

export default function Home() {
  const defaultVideoUrl = "https://www.youtube.com/watch?v=kM8crupu9DM&pp=ygUJbWVkaXRhY2Fv";
  const [videoUrl, setVideoUrl] = React.useState(defaultVideoUrl);
  const [playing, setPlaying] = React.useState(false);
  const [played, setPlayed] = useState(0);
  const videoPlayerRef = useRef(null);

  const handlePlay = () => {
    if(playing){
        setPlaying(false);
    }
    else{
        setPlaying(true);
    }
  }

  const handleReplay = () => {
    if(videoUrl === defaultVideoUrl){
      setVideoUrl('https://www.youtube.com/watch?v=kM8crupu9DM&pp=ygUJbWVkaXRhY2Fv/');
    }
    else{
      setVideoUrl(defaultVideoUrl);
    }
    setPlaying(true);
  }

  return (
    <Stack sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width: '100vw', gap:'2rem'}}>
        <AudioImage/>
        <Stack sx={{display:'flex', zIndex:'15', flexDirection: 'row', alignItems:'center', gap:'2rem', marginLeft:'5rem'}}>
          <CustomRoundButton handleClick={handlePlay} icon={playing?<PauseIcon sx={{color:'white', height:'2rem'}}/>:<PlayArrowIcon sx={{color:'white', height:'2rem'}}/>} replay={false}/>
          <CustomRoundButton handleClick={handleReplay} icon={<ReplayIcon sx={{color: 'white'}}/>} replay={true}/>
        </Stack>
        <Stack sx={{display: 'flex', zIndex: '15'}}>
          <Typography>Tempo de áudio ouvido: {Math.trunc(played)} segundos</Typography>

        </Stack>
        <Background/>
        <YouTubePlayer videoUrl={videoUrl} playing={playing} setPlayed={setPlayed}/>
    </Stack>
  );
}
