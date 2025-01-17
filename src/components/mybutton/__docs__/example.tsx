import Mybutton, { CustomButtonProps } from "../MyButton";
function Example(props: CustomButtonProps) {
    return (
        <Mybutton
            text={props.text}
            bgcolor={props.bgcolor}
            txtcolor={props.txtcolor}
            disabled={props.disabled}
            size={props.size}
            onClick={props.onClick} 
            bordercolor={props.bordercolor} 
            borderwidth={props.borderwidth} 
            hover={props.hover}       
        />
    )
}
export default Example