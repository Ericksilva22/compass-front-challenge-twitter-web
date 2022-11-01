// Button.stories.ts

import { Meta, StoryFn } from '@storybook/html';

export interface ButtonComponentProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  label: string;
  onClick?: (event: Event) => void;
}

export const buttonComponent = ({
  primary = true,
  size = 'large',
  backgroundColor,
  label,
  onClick,
}: ButtonComponentProps) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = label;

  if (onClick) button.addEventListener('click', onClick);

  const mode = primary ? 'primary' : 'secondary';
  button.className = [`${size}`, mode].join(' ');

  if (backgroundColor) button.style.backgroundColor = backgroundColor;

  return `<button type="button" onclick="${onClick ? onClick : ''}" class="${[
    `${size}`,
    mode,
  ].join(' ')}" style="background-color: ${
    primary ? backgroundColor : 'transparent'
  }; border-color: ${primary ? 'transparent' : backgroundColor}; color:${
    primary ? 'white' : backgroundColor
  }">${label}</button>`;
};

export default {
  title: 'Component/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

const Template: StoryFn<ButtonComponentProps> = (args) => {
  return buttonComponent(args);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
