import Mybutton, { Myfavouriteprops } from "../MyFavourite";
function Example(props: Myfavouriteprops) {
    return (
        <Mybutton
            onClick={props.onClick} 
            color={props.color}
            disabled={props.disabled}     
        />
    )
}
export default Example