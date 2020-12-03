import { Button } from '../Button/Button';
import styles from './Form.module.scss';
import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errorFields, setErrorFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (inputName, inputValue) => {
    setForm((prevState) => ({ ...prevState, [inputName]: inputValue }));
    setErrorFields((prevState) => ({ ...prevState, [inputName]: '' }));
  };

  const checkEmptyFields = () => {
    let valid = true;
    Object.keys(form).map((keyName, i) => {
      if (form[keyName] === '') {
        setErrorFields((prevState) => ({ ...prevState, [keyName]: 'Error' }));
        valid = false;
        return valid;
      }
    });
    return valid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (checkEmptyFields()) {
      setLoading(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className={styles['form__wrapper']}>
      <div className={styles['form__description']}>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form className={styles['form__input']} onSubmit={(e) => submitForm(e)}>
        <div className={styles['input__wrapper']}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            onChange={(e) => updateForm(e.target.name, e.target.value)}
            value={form.name}
          />
          {errorFields.name.length > 0 ? (
            <p className={styles['error__message__name']}>
              Can't be empty
              <span className={styles['error__icon']}>
                <img
                  src="../../static/assets/contact/desktop/icon-error.svg"
                  alt="An error icon."
                />
              </span>
            </p>
          ) : null}
        </div>
        <div className={styles['input__wrapper']}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={(e) => updateForm(e.target.name, e.target.value)}
          />
          {errorFields.email.length > 0 ? (
            <p className={styles['error__message__email']}>
              Can't be empty
              <span className={styles['error__icon']}>
                <img
                  src="../../static/assets/contact/desktop/icon-error.svg"
                  alt="An error icon."
                />
              </span>
            </p>
          ) : null}
        </div>
        <div className={styles['input__wrapper']}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="phone"
            id="phone"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={(e) => updateForm(e.target.name, e.target.value)}
          />
          {errorFields.phone.length > 0 ? (
            <p className={styles['error__message__phone']}>
              Can't be empty
              <span className={styles['error__icon']}>
                <img
                  src="../../static/assets/contact/desktop/icon-error.svg"
                  alt="An error icon."
                />
              </span>
            </p>
          ) : null}
        </div>
        <div className={styles['input__wrapper']}>
          <label htmlFor="message">Your Message</label>
          <input
            type="textarea"
            id="message"
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={(e) => updateForm(e.target.name, e.target.value)}
          />
          {errorFields.message.length > 0 ? (
            <p className={styles['error__message__message']}>
              Can't be empty
              <span className={styles['error__icon']}>
                <img
                  src="../../static/assets/contact/desktop/icon-error.svg"
                  alt="An error icon."
                />
              </span>
            </p>
          ) : null}
        </div>
        <Button className="button--onDark">
          {loading & !submitted
            ? 'Loading'
            : !loading & submitted
            ? 'Submitted'
            : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default Form;
