import { makeStyles } from "@material-ui/core";

export const useUtilityStyles = makeStyles(() => ({
    center: {
        flex: "auto",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    fullWidth: {
        width: "100%"
    }
}));
