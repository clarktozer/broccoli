import { Icon, Toolbar, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./styles";

export const Footer: FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Toolbar>
                <div className={classes.message}>
                    <Typography variant="caption" display="block">
                        <i>
                            Made with{" "}
                            <Icon className={classes.heart}>favorite</Icon> in
                            Melbourne
                        </i>
                    </Typography>
                    <Typography variant="caption" display="block">
                        <i>
                            &copy; 2020 Broccoli &amp; Co. All rights reserved.
                        </i>
                    </Typography>
                </div>
            </Toolbar>
        </footer>
    );
};
