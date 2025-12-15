"use client"
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Can I use Graphy for free?",
    answer:
      "Yes, Graphy offers a free plan with limited features so you can get started without any cost.",
  },
  {
    question: "What does unlimited viewers mean?",
    answer:
      "Unlimited viewers means there is no cap on how many people can view your shared charts.",
  },
  {
    question:
      "Are there any restrictions on where I can share my charts to?",
    answer:
      "You can share your charts anywhere including websites, presentations, and internal tools.",
  },
  {
    question:
      "Can I share Graphy charts to my social media channels?",
    answer:
      "Yes, Graphy charts can be shared on all major social media platforms.",
  },
  {
    question: "Can I embed my Graphy charts into other tools?",
    answer:
      "Graphy provides embed options so you can integrate charts into other tools and platforms.",
  },
  {
    question:
      "How can I remove the Graphy watermark from the charts I share?",
    answer:
      "The watermark can be removed by upgrading to a Plus or Business plan.",
  },
  {
    question: "Can I use my brand colors with Graphy?",
    answer:
      "Yes, brand colors are supported in paid plans.",
  },
  {
    question: "Can I invite team members to a shared account?",
    answer:
      "Yes, team collaboration is available on higher-tier plans.",
  },
  {
    question: "Can I purchase on an annual basis?",
    answer:
      "Yes, annual billing is available at a discounted rate.",
  },
  {
    question: "Are there any educational discounts?",
    answer:
      "We offer special pricing for students and educators. Contact support for details.",
  },
  {
    question: "What happens if I cancel my Plus account?",
    answer:
      "You will retain access until the end of your billing period, after which your account will downgrade.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <h2 className="mb-12 text-center text-4xl font-bold text-blue-900">
        FAQ
      </h2>

      <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-sm">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="border-b last:border-b-0">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center gap-4 px-6 py-5 text-left"
              >
                {/* Plus / Minus Icon */}
                <span className="text-2xl font-light text-gray-400">
                  {isOpen ? "−" : "+"}
                </span>

                <span className="text-sm md:text-base font-medium text-gray-900">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
