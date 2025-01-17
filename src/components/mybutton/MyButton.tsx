import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
export interface CustomButtonProps {
    text: string;
    txtcolor: string; 
    bgcolor: string;
    bordercolor: string;
    borderwidth: string;
    size: "small" | "medium" | "large";
    hover: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>; 
}
function Mybutton(props: CustomButtonProps) {
    const { bgcolor, text, txtcolor, disabled, onClick, size, bordercolor, borderwidth, hover } = props
    return (

        <Button
            type='button'
            
            onClick={onClick}
            disabled={disabled}
            size={size}
            border-color={bordercolor}
            border-width={borderwidth}
            sx={{ ':hover': {backgroundColor: bgcolor, color: hover}, color: txtcolor }}
        >
            {text}
        </Button>
    )
}
export default Mybutton;