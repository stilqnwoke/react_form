const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PHONE_NUMBER_REGEX = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export default function validateForm(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email =
      "Email address is invalid. Please make sure there is a '@' symbol";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be more than 10 characters";
  }

  if (!values.number) {
    errors.number = "Number is required";
  }

  if (!values.tel) {
    errors.tel = "Phone number is required";
  } else if (!PHONE_NUMBER_REGEX.test(values.tel)) {
    errors.tel = "Phone number is invalid";
  }

  if (!values.text) {
    errors.text = "Text is required";
  } else if (values.text.length < 3) {
    errors.tel = "Text needs to be more than 3 characters";
  }

  if (!values.url) {
    errors.url = "URL is required";
  } else if (!URL_REGEX.test(values.url)) {
    errors.url =
      "URL must be valid.Make sure the string contains http followed by ://";
  }

  if (!values.textarea) {
    errors.textarea = "Textarea is required";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (!values.datetimeLocal) {
    errors.datetimeLocal = "DatetimeLocal is required";
  }

  if (!values.month) {
    errors.month = "Month is required";
  }

  if (!values.time) {
    errors.time = "Time is required";
  }

  if (!values.week) {
    errors.week = "Week is required";
  }

  if (!values.file) {
    errors.file = "File is required";
  }

  return errors;
}
