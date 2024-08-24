import { IconButton, styled } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export interface IPlayButtonProps {
    handleClick?: () => void;
    playing: boolean;
}

export const PlayButton = ({handleClick, playing}:IPlayButtonProps) => {
    const StyledButton = styled(IconButton)({
       width:'5rem', 
       height:'5rem', 
       background:'#5E0F17',
        '&:hover': {
            background: '#481117',
        }
    })

    return(
        <StyledButton onClick={handleClick}>{playing?<PauseIcon sx={{color:'white', height:'2rem'}}/>:<PlayArrowIcon sx={{color:'white', height:'2rem'}}/>}</StyledButton>
    )
}