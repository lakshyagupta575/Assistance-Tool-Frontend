import Navbar from "../Navbar";
import ax from "../axios";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    ax.get("contact").then(console.log("Hitting backend api"));
  }

  return (
    <div>
      <Navbar />
      <h1>Contact page under construction...</h1>
      <form onSubmit={handleSubmit}>
        <h2>Hi</h2>
        <button type="submit">Click me</button>
      </form>
    </div>
  );
}

export default Contact;
