import { useState, useEffect } from "react";
import { inputTypes } from "../utils/allInputs";
import options from "../utils/toastOptions";
import { toast } from "react-toastify";

const useForm = (callback, validate) => {
  const [values, setValues] = useState(inputTypes);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]:
        event.target.type === "checkbox" || event.target.type === "radio"
          ? event.target.checked
          : value,
    });
  };

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
          toast.error("Something went wrong", options);
        }
      };

      asyncPostCall();

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
