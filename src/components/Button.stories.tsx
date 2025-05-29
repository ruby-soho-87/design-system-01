import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    variant: 'ghost',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    startIcon: <span>🔍</span>,
    endIcon: <span>➡️</span>,
  },
};
