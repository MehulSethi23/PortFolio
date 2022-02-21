import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Show({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Show1({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
function Right({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1.5 }}
      variants={{
        visible: { x: 0 },
        hidden: { x: 610 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Left({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        visible: { x: 0 },
        hidden: { x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
}

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        Message Sent
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={handleClose}
        sx={{ backgroundColor: "green" }}
      >
        <CloseIcon fontSize="small" sx={{ color: "white" }} />
      </IconButton>
    </>
  );
  const submitForm = (e) => {
    e.preventDefault();
    var url =
      "https://api.whatsapp.com/send?phone=+919971321581&text=" + message;
    console.log("message");
    // window.location.href = url;
    window.open(url, "_blank");
    handleClick();

    // console.log(process.env.NEXT_PUBLIC_API_URL);
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, subject, message }),
    // });
    // if (res.ok) {
    //   alert("Your response has been received!");
    //   setName("");
    //   setEmail("");
    //   setSubject("");
    //   setMessage("");
    // } else {
    //   alert("Your response has been received!");
    //   setName("");
    //   setEmail("");
    //   setSubject("");
    //   setMessage("");
    // }
  };

  return (
    <div className={styles.container}>
      <div>
        <Left>
          <h1>Reach Out Via Socials</h1>
        </Left>
        <Show>
          <ContactCode />
        </Show>
      </div>
      <div>
        <Show1>
          <h1>Or Message me on Whatsapp</h1>
          <form className={styles.form} onSubmit={submitForm}>
            {/* <div className={styles.flex}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="name">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div> */}
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
            <Snackbar
              open={open}
              autoHideDuration={13000}
              onClose={handleClose}
              message="Message Sent"
              action={action}
            />
          </form>
        </Show1>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
