import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/News',
} as Meta;

const Template: StoryFn = () => {
  return( 
    `
    <section class="section-news section-news-width">
        <h2>What's happening</h2>
        <div class="section-news-content">
        <div class="section-news-titles">
            <h4>COVID19 - Last night</h4>
            <a href="https://github.com/twitter-web">
            <p class="news-text">England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</p>
            <p class="news-trending">Trending with <span>#covid19</span></p>
            </a>
            
        </div>
        <figure>
            <img class="news-img" src="/images/news1.svg">
        </figure>
        </div>

        <div class="section-news-content">
        <div class="section-news-titles">
            <h4>US news · 4h ago</h4>
            <a href="https://github.com/twitter-web">
            <p class="news-text">Parler may go offline following suspensions by Amazon, Apple and Google</p>
            <p class="news-trending">Trending with <span>#trump</span></p>
            </a>
            
        </div>
        <figure>
            <img class="news-img" src="/images/news2.svg">
        </figure>
        </div>

        <div class="section-news-content">
        <div class="section-news-titles">
            <h4>India · 1h ago</h4>
            <a href="https://github.com/twitter-web">
            <p class="news-text">India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</p>
            <p class="news-trending">Trending with <span>#sport</span></p>
            </a>
            
        </div>
        <figure>
            <img class="news-img" src="/images/news3.svg">
        </figure>
        </div>
        <a class="Show-thread show-more" href="https://github.com/twitter-web">Show more</a>
    </section>
    `
  )
};

export const Light = Template.bind({});