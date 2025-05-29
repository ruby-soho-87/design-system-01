// src/components/Accordion.tsx
import React, { useState } from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 6, marginBottom: '1rem' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '1rem',
          background: '#f5f5f5',
          border: 'none',
          borderBottom: isOpen ? '1px solid #ddd' : 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div style={{ padding: '1rem', background: '#fff' }}>
          {children}
        </div>
      )}
    </div>
  );
};
