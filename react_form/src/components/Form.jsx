import React from "react";
import "./Form.css";
import useForm from "../hooks/useForm";
import validateForm from "../utils/validateForm";
import options from "../utils/toastOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validateForm
  );

  function submit() {
    toast.success("The form was submitted successfully", options);
  }

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit} noValidate>
        <section className="input__sections first">
          <div>
            <label className="label__inside required">Email</label>

            <input
              className="regular__input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              data-testid="test-email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label className="label__inside required">Number</label>

            <input
              className="regular__input"
              type="number"
              name="number"
              value={values.number}
              onChange={handleChange}
              data-testid="test-number"
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </div>

          <div>
            <label className="label__inside required">Password</label>

            <input
              className="regular__input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              data-testid="test-password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div>
            <label className="label__inside required">Tel</label>

            <input
              className="regular__input"
              type="tel"
              name="tel"
              value={values.tel}
              onChange={handleChange}
              data-testid="test-tel"
            />
            {errors.tel && <p className="error">{errors.tel}</p>}
          </div>

          <div>
            <label className="label__inside required">Text</label>

            <input
              className="regular__input"
              type="text"
              name="text"
              value={values.text}
              onChange={handleChange}
              data-testid="test-text"
            />
            {errors.text && <p className="error">{errors.text}</p>}
          </div>

          <div>
            <label className="label__inside required">URL</label>

            <input
              className="regular__input"
              type="url"
              name="url"
              value={values.url}
              onChange={handleChange}
              data-testid="test-url"
            />
            {errors.url && <p className="error">{errors.url}</p>}
          </div>

          <div>
            <label className="label__inside required">Textarea</label>

            <textarea
              className="regular__input"
              name="textarea"
              value={values.textarea}
              onChange={handleChange}
              id="textarea-id"
            />
            {errors.textarea && <p className="error">{errors.textarea}</p>}
          </div>
          <div>
            <label className="label__inside required">Date</label>

            <input
              className="regular__input"
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>

          <div>
            <label className="label__inside required">Datetime-local</label>

            <input
              className="regular__input"
              type="datetime-local"
              name="datetimeLocal"
              value={values.datetimeLocal}
              onChange={handleChange}
            />
            {errors.datetimeLocal && (
              <p className="error">{errors.datetimeLocal}</p>
            )}
          </div>

          <div>
            <label className="label__inside required">Month</label>

            <input
              className="regular__input"
              type="month"
              name="month"
              value={values.month}
              onChange={handleChange}
            />
            {errors.month && <p className="error">{errors.month}</p>}
          </div>

          <div>
            <label className="label__inside required">Time</label>

            <input
              className="regular__input"
              type="time"
              name="time"
              value={values.time}
              onChange={handleChange}
            />
            {errors.time && <p className="error">{errors.time}</p>}
          </div>

          <div>
            <label className="label__inside required">Week</label>

            <input
              className="regular__input"
              type="week"
              name="week"
              value={values.week}
              onChange={handleChange}
            />
            {errors.week && <p className="error">{errors.week}</p>}
          </div>
        </section>

        <section className="input__sections second">
          <div>
            <label className="checkbox__label">Radio</label>

            <input
              className="checkbox__input"
              type="radio"
              name="radio"
              value={values.radio}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="checkbox__label">Range - {values.range}</label>

            <input
              className="checkbox__input"
              type="range"
              name="range"
              value={values.range}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="checkbox__label">Checkbox</label>

            <input
              className="checkbox__input"
              type="checkbox"
              name="checkbox"
              defaultChecked={values.checkbox}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="checkbox__label">Color</label>

            <input
              type="color"
              name="color"
              value={values.color}
              onChange={handleChange}
              id="color-style"
            />
          </div>

          <div>
            <label for="file-upload" class="custom-file-upload required">
              <input
                id="file-upload"
                type="file"
                className="checkbox__input required"
                name="file"
                value={values.file}
                onChange={handleChange}
              />{" "}
              {values.file === "" ? "Upload File" : values.file}
            </label>

            {/* <input
            className="checkbox__input required"
            type="file"
            name="file"
            value={values.file}
            onChange={handleChange}
          /> */}
            {errors.file && <p className="error">{errors.file}</p>}
          </div>
        </section>

        <section className="submit__form third">
          <h1>
            Please make sure all of the <br />
            required fields are filled
          </h1>

          <h3>Once you are ready you can click on submit</h3>

          <input
            className="submit__input"
            type="submit"
            value="Submit"
            data-testid="test-submit-button"
          />
        </section>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
