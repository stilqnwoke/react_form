import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="form__container">
      <section className="input__sections">
        <div>
          <label className="label__inside">Email</label>
          <input className="regular__input" type="email" />
        </div>

        <div>
          <label className="label__inside">Number</label>
          <input className="regular__input" type="number" />
        </div>
        <div>
          <label className="label__inside">Password</label>
          <input className="regular__input" type="password" />
        </div>
        <div>
          <label className="label__inside">Tel</label>
          <input className="regular__input" type="tel" />
        </div>
        <div>
          <label className="label__inside">Text</label>
          <input className="regular__input" type="text" />
        </div>

        <div>
          <label className="label__inside">URL</label>
          <input className="regular__input" type="url" />
        </div>

        <div>
          <label className="label__inside">Textarea</label>
          <textarea className="regular__input" />
        </div>
      </section>

      <section className="input__sections">
        <div>
          <label className="label__inside">Date</label>
          <input className="date__input" type="date" />
        </div>
        <div>
          <label className="label__inside">Datetime-local</label>
          <input className="date__input" type="datetime-local" />
        </div>
        <div>
          <label className="label__inside">Month</label>
          <input className="date__input" type="month" />
        </div>
        <div>
          <label className="label__inside">Time</label>
          <input className="date__input" type="time" />
        </div>
        <div>
          <label className="label__inside">Week</label>
          <input className="date__input" type="week" />
        </div>
      </section>

      <section className="checkbox__section">
        <div>
          <label className="checkbox__label">Radio</label>
          <input className="checkbox__input" type="radio" />
        </div>
        <div>
          <label className="checkbox__label">Range</label>
          <input className="checkbox__input" type="range" />
        </div>
        <div>
          <label className="checkbox__label">Checkbox</label>
          <input className="checkbox__input" type="checkbox" />
        </div>
        <div>
          <label className="checkbox__label">Color</label>
          <input type="color" id="head" name="head" value="#e66465" />
        </div>
        <div>
          <label className="checkbox__label">File</label>
          <input className="checkbox__input" type="file" />
        </div>
      </section>

      <div className="submit__form">
        <input type="submit" />
      </div>
    </form>
  );
};

export default Form;
