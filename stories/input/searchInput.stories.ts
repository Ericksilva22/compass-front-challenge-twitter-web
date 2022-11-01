import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/input',
} as Meta;

const Template: StoryFn = () => {
  return( 
        `
        <form class="search-bar-stories">
            <input type="search" class="search" placeholder="Search Twitter">
            <img class="search-icon" src="/images/search.svg" alt="search icon">
        </form>
         `
  )
};

export const search_twitter = Template.bind({});