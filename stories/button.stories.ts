// Button.stories.ts

import { Meta, StoryFn } from '@storybook/html';

type ButtonArgs = {
  primary: boolean;
  label: string;
}

export default {
  title: 'button',
} as Meta<ButtonArgs>;

export function Story(props:ButtonArgs) {
    return (
        ` <button>${props.label}</button>
        <input>`
    )
}

export const Primary = Story.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

