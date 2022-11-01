import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/Profile',
} as Meta;

const Template: StoryFn = () => {
    return( 
        `
        <div class="aside-profile-stories">
          <figure>
            <a href="https://github.com/twitter-web">
              <img class="aside-profile-img" src="/images/Profile Picture.svg" alt="profile picture">
            </a>
          </figure>
          <div class="aside-profile-text">
            <a class="aside-profile-text-a" href="https://github.com/twitter-web">Jerome Bell</a>
            <a class="aside-profile-text-p" href="https://github.com/twitter-web">@afonsoinocente</a>
          </div>
          <a href="https://github.com/twitter-web">
            <img class="aside-profile-icon" src="/images/elipses.svg">
          </a>
          
        </div>  
        `
    )
};

export const Light = Template.bind({});