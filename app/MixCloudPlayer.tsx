'use client'

import { Box, Stack, styled } from "@mui/material"
import ReactPlayer from "react-player/mixcloud"

export const MixCloudPlayer = () => {
    const StyledBox = styled(Box)({
        display: 'flex',
        position: 'absolute',
        zIndex: 1,
    })
    return(
        
        <ReactPlayer url="https://www.mixcloud.com/olajoaocarlos/medita%C3%A7%C3%A3o-deitada-21-12-17/" controls={false}  />
        
    )
}