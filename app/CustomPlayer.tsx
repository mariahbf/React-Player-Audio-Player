import { Stack, Typography } from "@mui/material";
import { AudioImage } from "./AudioImage";
import { PlayerButtons } from "./PlayerButtons";
import React from "react";

export interface ICustomPlayerProps {
    playing: boolean;
    handlePlayClick: () => void;
    handleReplayClick: () => void;
    secondsPlayed: number;
}

export const CustomPlayer = ({playing, handlePlayClick, handleReplayClick, secondsPlayed}:ICustomPlayerProps) => {
    return(
        <Stack display={'flex'} position={'absolute'} zIndex={'2'} alignItems={'center'} height={'100vh'} gap={'2rem'} justifyContent={'center'}>
            <AudioImage/>
            <PlayerButtons playing={playing} handlePlayClick={handlePlayClick} handleReplayClick={handleReplayClick}/>
            <Typography sx={{zIndex: '2'}}>Tempo de áudio ouvido: {Math.trunc(secondsPlayed)} segundos</Typography>
        </Stack>
    )
}