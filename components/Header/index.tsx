import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { FC } from "react";

export const Header: FC = () => (
    <AppBar position="fixed" color="inherit" variant="outlined">
        <Toolbar>
            <Typography>Broccoli &amp; Co.</Typography>
        </Toolbar>
    </AppBar>
);
