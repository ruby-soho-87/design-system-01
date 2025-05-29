// src/components/TextField.tsx
import React from 'react';

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
};

export const TextField = ({
  label,
  value,
  onChange,
  placeholder = '',
  error,
  type = 'text',
}: TextFieldProps) => {
  const id = `textfield-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id} style={{ display: 'block', fontWeight: 500, marginBottom: '0.25rem' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '0.5rem',
          border: `1px solid ${error ? 'red' : '#ccc'}`,
          borderRadius: 4,
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
      {error && <div style={{ color: 'red', marginTop: '0.25rem' }}>{error}</div>}
    </div>
  );
};
