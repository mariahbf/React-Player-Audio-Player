import { Box, styled } from "@mui/material"

export const Background = () => {
    const StyledBox = styled(Box)({
        display: 'flex',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#F9DCD5',
        height: '100%',
        width: '100%',
    })
    return(
        <StyledBox/>
    )
}