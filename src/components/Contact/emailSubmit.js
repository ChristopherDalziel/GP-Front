import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Email submission function
async function handleSubmit(values) {
  const {
    first_name,
    last_name,
    contact_number,
    subject,
    email,
    message
  } = values;
  try {
    await axios.post(process.env.REACT_APP_BACKEND_URL + "/mail/send", {
      first_name,
      last_name,
      contact_number,
      subject,
      email,
      message
    });
  } catch (err) {
    console.log(err.message);
  }
}

export default handleSubmit;
