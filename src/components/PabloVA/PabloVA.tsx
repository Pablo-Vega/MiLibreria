import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface CustomButtonProps {
    defval: number;
    precision?: number;
    maxrating?: number;
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
}

function PabloVA(props: CustomButtonProps) {
    const { defval, precision, maxrating, color } = props
    return (

        <Rating
            defaultValue={defval}
            precision={precision}
            icon={<FavoriteIcon color={color} />}
            emptyIcon={<FavoriteBorderIcon color={color} />}
            max={maxrating}
            aria-label="custom rating"
        />
    )
}
export default PabloVA;