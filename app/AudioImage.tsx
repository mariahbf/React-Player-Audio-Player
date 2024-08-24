import { Avatar } from "@mui/material"
import audioCover from "./resources/audioCover.png"

export const AudioImage = () => {
    return(
        <Avatar alt="Remy Sharp" src={audioCover.src} sx={{width:'15rem', height:'15rem'}}/>
    )
}