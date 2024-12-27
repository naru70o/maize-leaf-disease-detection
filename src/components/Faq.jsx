"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "Is it easy to use for beginners?",
    answer:
      "Yes, our system is designed to be user-friendly, often involving simple steps like uploading an image and waiting for results.",
  },
  {
    question: "How long does it take to detect a disease?",
    answer:
      "Detection is usually instant or takes just a few seconds after the image is uploaded.",
  },
  {
    question: "What does the system do after detecting a disease?",
    answer:
      "We trained our system to recommend the user to reach out to specialists if the plant isn’t healthy but if the plant is healthy it will just display healthy",
  },
  {
    question: "Can it detect diseases in all plants?",
    answer:
      "The detector’s capabilities doesn’t detect much that much as it is just MVP but it is our goal to detect all disease plant in all plants.",
  },
];

const AccordiaItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      id="faq"
      key={question}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center cursor-pointer">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-minus"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=""
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#6B8E23,#228B22)] overflow-clip text-white px-8 py-[72px]">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
          Frequently asked questions
        </h2>

        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordiaItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
