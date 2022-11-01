import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/input',
} as Meta;

const Template: StoryFn = () => {
  return( 
        `
            <figure>
            <a href="https://github.com/twitter-web">
                <img class="main-profile-icon" src="/images/Profile Picture.svg" alt="Profile picture">
            </a>
            </figure>
            <div class="form-tweet">
            <form class="main__formulario">
                <input id="post_input" type="textarea" maxlength="380" placeholder="What's happening?">
            </form>

            <div id="preview-image">
                
            </div>
            
            <div class="main-actions">
                <div class="main-action-img">
                <label class="label-media">
                    <input class="input-media" type="file" accept="image/*">
                    <img src="/images/icon media.svg" alt="media icon">
                </label>
                
                <img src="/images/icon_gif.svg" alt="Gif icon">
                <img src="/images/icon_poll.svg" alt="Poll icon">
                <img src="/images/Icon_emoji.svg" alt="Emoji icon">
                <img src="/images/icon_schedule.svg" alt="schedule icon">
                </div>
                <button id="btn-tweet-post" class="main-form-button">Tweet</button>
            </div>
            </div>
        `
  )
};

export const form_twitter = Template.bind({});