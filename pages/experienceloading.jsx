import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import router from "next/router";
import { useRouter } from "next/router";

const experienceloadingPage = () => {
  const router = useRouter();
  const buttonRef = useRef("accept");
  const [accepted, setAccepted] = useState(false);
  const [url, currURL] = useState("");

  const acceptCall = (e) => {
    router.push("/experience");
  };

  const fireEvent = (el, eventName) => {
    const event = new Event(eventName, { bubbles: true });
    el.dispatchEvent(event);
  };

  useEffect(() => {
    if (!accepted) {
      setTimeout(() => {
        if (buttonRef.current instanceof Element) {
          setAccepted(true);
          fireEvent(buttonRef.current, "click");
        }
      }, 0);
    }
  }, [accepted]);

  return (
    <div className="App">
      <form action="/experience">
        <button
          style={{ display: "none" }}
          name="accept"
          className="alertButtonPrimary"
          ref={buttonRef}
          onClick={acceptCall}
        ></button>
      </form>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "experienceLoading" },
  };
}

export default experienceloadingPage;
