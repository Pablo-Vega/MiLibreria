import { MouseEventHandler } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { IconButton} from '@mui/material';
export interface Myfavouriteprops {
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
    disabled?: boolean; 
    onClick?: MouseEventHandler<HTMLButtonElement>; 
}
function Myfavourite(props: Myfavouriteprops) {
    const { disabled, onClick, color } = props
    return (
        
        <IconButton 
            onClick={onClick}
            disabled={disabled}
        >
            <FavoriteIcon 
                color={color} 
            />
        </IconButton>
    )
}
export default Myfavourite;