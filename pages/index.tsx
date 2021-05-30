import { Welcome } from "../components";
import { useUtilityStyles } from "../styles";

export default function Home() {
    const classes = useUtilityStyles();

    return (
        <div className={classes.center}>
            <Welcome />
        </div>
    );
}
