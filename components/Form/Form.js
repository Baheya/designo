import { Button } from '../Button/Button';
import styles from './Form.module.scss';

const Form = () => {
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
      <div className={styles['form__input']}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
        <label htmlFor="phone">Phone Number</label>
        <input type="phone" id="phone" placeholder="Phone Number" />
        <label htmlFor="message">Your Message</label>
        <input type="textarea" id="message" placeholder="Your Message" />
        <Button className="button--onDark">Submit</Button>
      </div>
    </div>
  );
};

export default Form;
