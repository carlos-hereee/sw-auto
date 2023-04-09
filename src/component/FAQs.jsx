import { useState } from "react";

const FAQs = () => {
  const [active, setActive] = useState({});
  const faqs = [
    {
      uid: "faqs1",
      question: "When are you open?",
      answer: "We are open Monday-Saturday from 9am-7pm",
    },
  ];

  return (
    <div>
      <h2>Frequently asked questions</h2>
      {faqs.map((f) => (
        <div key={f.uid}>
          <button type="button" key={f.uid} onClick={() => setActive(f)}>
            {f.question}
          </button>
          {active.uid === active && f.answer}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
