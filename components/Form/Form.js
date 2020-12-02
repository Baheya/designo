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

  const updateForm = (inputName, inputValue) => {
    setForm((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      form.name === '' ||
      form.email === '' ||
      form.phone === '' ||
      form.message === ''
    ) {
      console.log('oh no');
    } else {
      console.log('yay!');
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
          <p className={styles['error__message']}>
            Can't be empty
            <span className={styles['error__icon']}>
              <img
                src="../../static/assets/contact/desktop/icon-error.svg"
                alt="An error icon."
              />
            </span>
          </p>
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
          <p className={styles['error__message']}>
            Can't be empty
            <span className={styles['error__icon']}>
              <img
                src="../../static/assets/contact/desktop/icon-error.svg"
                alt="An error icon."
              />
            </span>
          </p>
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
          <p className={styles['error__message']}>
            Can't be empty
            <span className={styles['error__icon']}>
              <img
                src="../../static/assets/contact/desktop/icon-error.svg"
                alt="An error icon."
              />
            </span>
          </p>
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
          <p className={styles['error__message']}>
            Can't be empty
            <span className={styles['error__icon']}>
              <img
                src="../../static/assets/contact/desktop/icon-error.svg"
                alt="An error icon."
              />
            </span>
          </p>
        </div>
        <Button className="button--onDark">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
