import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/Tweet',
} as Meta;

const Template: StoryFn = () => {
  return( 
        `
        <section class="section-post">
            <figure>
            <a href="https://github.com/twitter-web">
                <img class="main-profile-icon" src="/images/Profile Picture-devon.svg ">
            </a> 
            </figure>
            <div>
            <div class="section-post-title">
                <a class="section-post-title-h3" href="https://github.com/twitter-web">Devon Lane <span class="section-post-title-span">@johndue</span></a>
                <p class="section-post-time">23s</p>
            </div>
            <p class="section-post-paragraph">Tom is in a big hurry</p>
            <img class="section-post-img" src="/images/Placehpolder.png">
            <div class="post-actions">
                <div class="post-actions-itens post-actions-color">
                <img src="/images/post_comment.svg" alt="">
                <p>61</p>
                </div>

                <div class="post-actions-itens post-actions-color">
                <img src="/images/post_retweet.svg" alt="">
                <p>12</p>
                </div>
                
                <div class="post-actions-itens">
                <img  src="/images/post_like.svg" alt="">
                <p class="color-like">6.2K</p>
                </div>

                <div class="post-actions-itens post-actions-color">
                <img src="/images/post_share.svg" alt="">
                <p>61</p>
                </div>
            </div>
            <a class="Show-thread" href="https://github.com/twitter-web">show this thread</a>
            </div>
        </section>
        `
  )
};

export const post = Template.bind({});