import { CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./styles";

export const OverlaySpinner: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.overlaySpinner}>
            <CircularProgress />
        </div>
    );
};
