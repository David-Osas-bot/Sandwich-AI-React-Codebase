import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Is there really a separate mobile app and web dashboard?',
      answer: 'Yes. Procurement, inventory, kitchen, processing, POS, customer service, and any custom department you define work from the offline-first mobile app on the floor. Super Admins, branch managers, finance officers, and HR run oversight, approvals, and reporting from the web dashboard in any browser — both read and write the same real-time ledger.',
    },
    {
      question: 'What happens if a branch loses internet mid-shift?',
      answer: 'The mobile app is offline-first — orders, counts, and kitchen actions queue locally on the device and sync automatically the moment connectivity returns, with no data loss.',
    },
    {
      question: 'Do you have your own delivery riders?',
      answer: "No — Sandwich doesn't operate a riders app. Instead we integrate directly with the rider and aggregator systems you already use, like Glovo, Chowdeck, Uber Eats, and Bolt Food, so dispatch and order status flow straight into your ledger.",
    },
    {
      question: 'How long does onboarding take?',
      answer: 'Most single-branch operators are fully live within a day using our setup guides. Multi-branch and enterprise rollouts follow a structured deployment plan with a dedicated onboarding team.',
    },
    {
      question: 'Can I keep using QuickBooks or Xero?',
      answer: "Yes. Sandwich's accounting module syncs journal entries, invoices, suppliers, and tax rates to QuickBooks or Xero, so your external books stay current without double entry.",
    },
    {
      question: 'Are the AI recommendations automatic, or can my team review them first?',
      answer: 'Every AI feature — invoice scanning, reorder predictions, sales forecasting — is reviewable and overridable by your team before any action is taken. Nothing posts to the ledger without a human able to see it first.',
    },
  ];

  return (
    <section className="alt reveal">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Common questions
          </span>
          <h2>Before you talk to us</h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <div 
                  className="faq-q" 
                  onClick={() => toggleFaq(index)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  {item.question}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M2 8h12" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="faq-a">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;