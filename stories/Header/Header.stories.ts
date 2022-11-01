import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/Header',
} as Meta;

const Template: StoryFn = () => {
    return( 
        `
        <header class="main__header main__header-stories">
            <h1>Home</h1>
            <img src="/images/icon_dark_mode.svg" alt="Icon dark mode">
        </header>   
        `
    )
};

export const Light = Template.bind({});