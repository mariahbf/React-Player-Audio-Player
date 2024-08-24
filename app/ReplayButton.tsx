import { IconButton, styled } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';

export interface IReplayButtonProps {
    handleClick: () => void;
}

export const ReplayButton = ({handleClick}:IReplayButtonProps) => {
    const StyledButton = styled(IconButton)({
        width:'3rem', 
        height:'3rem', 
        background:'#5E0F17',
         '&:hover': {
             background: '#481117',
         }
     })
    return( 
        <StyledButton onClick={handleClick}>{<ReplayIcon sx={{color:'white'}}/>}</StyledButton>
    )
}