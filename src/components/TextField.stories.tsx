// src/components/TextField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Name',
    value: '',
    placeholder: 'Enter your name',
    onChange: (value: string) => console.log(value),
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    value: 'not-an-email',
    placeholder: 'Enter your email',
    error: 'Invalid email format',
    onChange: (value: string) => console.log(value),
  },
};
