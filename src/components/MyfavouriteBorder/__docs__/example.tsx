import MyFavouriteborder, { CustomButtonProps } from "../Myfavouriteborder";
function Example(props: CustomButtonProps) {
    return (
        <MyFavouriteborder
            onClick={props.onClick} 
            color={props.color}
            disabled={props.disabled}     
        />
    )
}
export default Example