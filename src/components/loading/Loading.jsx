import { PropagateLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "0 auto",
};

export function Loading () {
    return (
        <PropagateLoader color="hsla(158, 67%, 53%, 1)" size={15} css={override}/>
    )
}