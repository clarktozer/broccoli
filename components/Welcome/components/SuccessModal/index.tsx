import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography
} from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./styles";
import { SuccessModalProps } from "./types";

export const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    const classes = useStyles();

    return (
        <Dialog onClose={onClose} open={isOpen}>
            <DialogTitle>All Done!</DialogTitle>
            <DialogContent>
                <Typography align="center">
                    You will be one of the first to experience Broccoli &amp;
                    Co. when we launch.
                </Typography>
                <div className={classes.okButton}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={onClose}
                    >
                        Ok
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
