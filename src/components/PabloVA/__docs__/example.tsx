import PabloVA, { CustomButtonProps } from "../PabloVA";
function Example(props: CustomButtonProps) {
    return (
        <PabloVA
            defval={props.defval}
            precision={props.precision}
            color={props.color}
            maxrating={props.maxrating}
        />
    )
}
export default Example