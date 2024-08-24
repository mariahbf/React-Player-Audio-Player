import { Stack, } from "@mui/material"
import { YouTubePlayer } from "./YouTubePlayer"
import React from "react"
import { Background } from "./Backgorund"
import { CustomPlayer } from "./CustomPlayer"

export const AudioPlayer = () => {
    const [secondsPlayed, setSecondsPlayed] = React.useState(0);
    const [playing, setPlaying] = React.useState(false);
    const handlePlayClick = () => {
        if(playing){
            setPlaying(false);
        }
        else{
            setPlaying(true);
        }
      }

    const defaultVideoUrl = "https://www.youtube.com/watch?v=kM8crupu9DM&pp=ygUJbWVkaXRhY2Fv";
    const [videoUrl, setVideoUrl] = React.useState(defaultVideoUrl);
    const handleReplayClick = () => {
        setVideoUrl(prevUrl => prevUrl === defaultVideoUrl ? `${defaultVideoUrl}/` : defaultVideoUrl);
        setPlaying(true);
    }

    return(
        <Stack display={'flex'} width={'50rem'} height={'100vh'} alignItems={'center'} gap={'4rem'}>
            <CustomPlayer playing={playing} handlePlayClick={handlePlayClick} handleReplayClick={handleReplayClick} secondsPlayed={secondsPlayed}/>
            <Background/>
            <YouTubePlayer videoUrl={videoUrl} playing={playing} setPlayed={setSecondsPlayed}/>
        </Stack>
    )
}