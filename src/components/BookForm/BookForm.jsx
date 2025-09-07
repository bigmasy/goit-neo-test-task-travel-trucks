import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography, TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date()
    .required("Booking date is required")
    .min(new Date(), "Please select a date from today or later"),
  comment: Yup.string(),
});

const BookForm = () => {
  return (
    <Box
      sx={{
        p: "44px",
        borderRadius: "10px",
        border: "1px solid rgba(16, 24, 40, 0.2)",
      }}
    >
      <Box sx={{ mb: "24px" }}>
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          mb={1}
          textAlign={"left"}
        >
          Book your campervan now
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="text.secondary"
          textAlign={"left"}
        >
          Stay connected! We are always ready to help you.
        </Typography>
      </Box>

      <Formik
        initialValues={{ name: "", email: "", bookingDate: null, comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Імітуємо відправку даних з затримкою
          toast.promise(
            new Promise((resolve) => {
              setTimeout(() => {
                console.log("Form values:", values);
                resetForm();
                setSubmitting(false);
                resolve();
              }, 2000);
            }),
            {
              pending: "Sending your request...",
              success: "Your request has been sent successfully! 🎉",
              error: "Oops, something went wrong. Please try again.",
            }
          );
        }}
      >
        {({ setFieldValue, values, touched, errors }) => (
          <Form>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name*"
                sx={{ bgcolor: "#F7F7F7", "& fieldset": { border: "none" } }}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Box>

            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="email"
                type="email"
                label="Email*"
                sx={{ bgcolor: "#F7F7F7", "& fieldset": { border: "none" } }}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>

            <Box mb={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  name="bookingDate"
                  label="Booking date*"
                  value={values.bookingDate}
                  onChange={(newValue) =>
                    setFieldValue("bookingDate", newValue)
                  }
                  disablePast
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: {
                        bgcolor: "#F7F7F7",
                        "& fieldset": { border: "none" },
                      },
                      error: touched.bookingDate && Boolean(errors.bookingDate),
                      helperText: touched.bookingDate && errors.bookingDate,
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>

            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="comment"
                label="Comment"
                multiline
                rows={4}
                sx={{ bgcolor: "#F7F7F7", "& fieldset": { border: "none" } }}
                error={touched.comment && Boolean(errors.comment)}
                helperText={touched.comment && errors.comment}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#E44848",
                textTransform: "none",
                fontSize: "1.2rem",
                px: 4,
                py: 1.5,
                padding: "14px 60px",
                borderRadius: "999px",
                transition: "background-color 0.3s, transform 0.2s",
                "&:hover": {
                  bgcolor: "#D84343",
                  color: "#fff",
                },
              }}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BookForm;
