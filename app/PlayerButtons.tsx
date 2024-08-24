
import { Stack } from "@mui/material";
import { PlayButton } from "./PlayButton";
import { ReplayButton } from "./ReplayButton";

export interface IPlayerButtonsProps {
    playing: boolean;
    handlePlayClick: () => void;
    handleReplayClick: () => void;
}

export const PlayerButtons = ({playing, handlePlayClick, handleReplayClick}:IPlayerButtonsProps) => {
    return(
        <Stack display={'flex'} flexDirection={'row'} width={'15rem'} justifyContent={'flex-end'} gap={'2rem'}>
            <PlayButton playing={playing} handleClick={handlePlayClick} />
            <ReplayButton handleClick={handleReplayClick}/>
        </Stack>
    );
}