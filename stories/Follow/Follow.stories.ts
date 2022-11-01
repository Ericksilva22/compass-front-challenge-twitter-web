import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/Follow',
} as Meta;

const Template: StoryFn = () => {
    return( 
            `
            <section class="follow section-news section-news-width">
            <h2 class="follow-title">Who to follow</h2>
    
            <div class="follow-person">
              <a href="https://github.com/twitter-web">
                <img class="follow-person-img" src="/images/Bessie cooper.svg">
              </a>
              <div class="follow-data">
                <a href="https://github.com/twitter-web" class="follow-data-a">Bessie Cooper</a>
                <p>@alessandroveronezi</p>
              </div>
              <a class="link-follow" href="https://github.com/twitter-web">
                <button class="btn-follow">follow</button>
              </a>
              
            </div>
    
            <div class="follow-person">
              <a href="https://github.com/twitter-web">
                <img class="follow-person-img" src="/images/jennier wilson.svg">
              </a>
              <div class="follow-data">
                <a href="https://github.com/twitter-web" class="follow-data-a">Jenny Wilson</a>
                <p>@gabrielcantarin</p>
              </div>
              <a href="https://github.com/twitter-web">
                <button class="btn-follow">follow</button>
              </a>
              
            </div>
            <a class="Show-thread show-more" href="https://github.com/twitter-web">Show more</a>
          </section>
            `
    )
};

export const Light = Template.bind({});