import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', gap: '16px' }}>
      <h1>Hello Design System learner 👋👋</h1>
      <Button label="Primary" onClick={() => alert('Clicked!')} />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
      <Button
        label="With Icons"
        startIcon={<span>🔍</span>}
        endIcon={<span>➡️</span>}
      />
    </div>
  );
}

export default App;
