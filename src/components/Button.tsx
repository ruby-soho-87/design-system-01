import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const getStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return {
        backgroundColor: '#eaeaea',
        color: '#333',
        border: '1px solid #ccc',
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: '#0070f3',
        border: '1px solid transparent',
      };
    case 'primary':
    default:
      return {
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
      };
  }
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  startIcon,
  endIcon,
}) => {
  const styles = getStyles(variant);

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        ...styles,
      }}
    >
      {startIcon && <span>{startIcon}</span>}
      {label}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
