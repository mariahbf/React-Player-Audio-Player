'use client'
import { Box, styled } from "@mui/material";
import React from 'react'
import { AudioPlayer } from "./AudioPlayer";

export default function Home() {
  const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#F9DCD5',
    height: '100vh',
    width: '100vw',
    padding: '0',
    margin: '0',
  })
  
  return (
    <StyledBox>
      <AudioPlayer/>
    </StyledBox>
  );
}
