import { useState, useEffect } from "react";
import { inputTypes } from "../utils/allInputs";
import options from "../utils/toastOptions";
import { toast } from "react-toastify";

const useForm = (callback, validate) => {
  /* Setting the default values of the inputs */
  const [values, setValues] = useState(inputTypes);

  /* Used for storing errors */
  const [errors, setErrors] = useState({});
  /* Used for detecting when the form is submitted */
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Used for all of the inputs */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]:
        /* If the radio and checkbox are changed, they are changing state, otherwise default */
        event.target.type === "checkbox" || event.target.type === "radio"
          ? event.target.checked
          : value,
    });
  };

  /* After the submit button is clicked */
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const url =
        "https://www.toptal.com/developers/postbin/1673445305214-8449628150556";

      const asyncPostCall = async () => {
        try {
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          setIsSubmitting(false);
        } catch (error) {
          /* Toast message of when the request fails */
          toast.error("Something went wrong", options);
        }
      };

      asyncPostCall();

      /* So the Form component can be rerendered and the information is received */
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
