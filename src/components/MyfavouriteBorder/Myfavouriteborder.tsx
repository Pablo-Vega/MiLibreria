import { MouseEventHandler } from 'react';
import { IconButton} from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
//Declaro la interface del componente.
export interface CustomButtonProps {
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
    disabled?: boolean; 
    onClick?: MouseEventHandler<HTMLButtonElement>; 
}
function Myfavourite(props: CustomButtonProps) {
    const { disabled, onClick, color } = props
    return (
        
        <IconButton 
            onClick={onClick}
            disabled={disabled}
        >
            <FavoriteBorder 
                color={color} 
            />
        </IconButton>
    )
}
export default Myfavourite;