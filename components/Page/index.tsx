import React, { FC } from "react";
import { useStyles } from "./styles";

export const Page: FC = ({ children }) => {
    const classes = useStyles();

    return <div className={classes.page}>{children}</div>;
};
