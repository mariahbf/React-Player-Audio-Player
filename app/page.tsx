'use client'
import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from 'react'
import { SoundCloudPlayer } from "./SoundCloudPlayer";
import { MixCloudPlayer } from "./MixCloudPlayer";
import { YouTubePlayer } from "./YouTubePlayer";
import { CustomPlayer } from "./CustomPlayer";
import { Background } from "./resources/Backgorund";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


export default function Home() {
  const [playing, setPlaying] = React.useState(false);
  const handlePlay = () => {
    if(playing){
        setPlaying(false);
    }
    else{
        setPlaying(true);
    }
  }

  return (
    <Stack sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'46rem'}}>
      <CustomPlayer/>
      <Stack sx={{display:'flex', position:'absolute', zIndex:'15', marginTop:'20rem'}}>
        <IconButton onClick={handlePlay} sx={{width:'4rem', height:'4rem'}}>{playing ? <PauseIcon /> : <PlayArrowIcon />}</IconButton>
      </Stack>
      <Background/>
      <YouTubePlayer playing={playing}/>
    </Stack>
  );
}
