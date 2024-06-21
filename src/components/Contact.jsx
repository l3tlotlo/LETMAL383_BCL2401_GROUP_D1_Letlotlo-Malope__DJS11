
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <p>
        Go ahead and message us wth all your suggestions, enquiries and comments.
      </p>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Type Here" />

        <label htmlFor="email">Your e-mail address:</label>
        <input type="email" id="email" name="email" placeholder="Type Here" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Type Here" ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;