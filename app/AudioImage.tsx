
import { Avatar, Box, IconButton, Stack, styled } from "@mui/material"
import audioCover from "./resources/audioCover.png"

export const AudioImage = () => {
    
    return(
        <Stack sx={{display:'flex', zIndex:'2', justifyContent:'center', alignItems:'center'}}>
            <Avatar alt="Remy Sharp" src={audioCover.src} sx={{width:'15rem', height:'15rem'}}/>
        </Stack>
    )
}