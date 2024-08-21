'use client'
import { IconButton, Stack, styled } from "@mui/material";


export interface ICustomRoundButtonProps {
    handleClick?: () => void;
    icon: JSX.Element;
    replay?: boolean;
}

export const CustomRoundButton = ({handleClick, icon, replay}:ICustomRoundButtonProps) => {
    const StyledButton = styled(IconButton)({
       width:'5rem', 
       height:'5rem', 
       background:'#5E0F17',
        '&:hover': {
            background: '#481117',
        }
    })

    const StyledButtonSmaller = styled(IconButton)({
        width:'3rem', 
        height:'3rem', 
        background:'#5E0F17',
         '&:hover': {
             background: '#481117',
         }
     })
    return(
        <Stack>
            {replay?<StyledButtonSmaller onClick={handleClick}>{icon}</StyledButtonSmaller>:<StyledButton onClick={handleClick}>{icon}</StyledButton>}
        </Stack>
        
    )
}