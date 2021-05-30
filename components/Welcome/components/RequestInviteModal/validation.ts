import * as yup from "yup";

export const requestInviteValidationSchema = yup.object({
    name: yup
        .string()
        .min(3, "Please enter more than 3 characters!")
        .required("Please enter your full name!"),
    email: yup
        .string()
        .email("Please enter a valid email address!")
        .required("Please enter your email address!"),
    confirmEmail: yup
        .string()
        .email("Please enter a valid email address!")
        .test(
            "emails-match",
            "Your email address much match!",
            function (value) {
                return this.parent.email === value;
            }
        )
});
