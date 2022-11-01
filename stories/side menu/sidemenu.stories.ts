import { Meta, StoryFn } from '@storybook/html';

export default {
  title: 'Component/Side Menu',
} as Meta;

const Template: StoryFn = () => {
  return( 
    `
        <aside class="aside">
        <div class="aside-menu">
          <a href="index.html">
            <img src="/images/Logo_twitter.svg" alt="Twitter Logo">
          </a>

        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/Selected.svg" alt="Explore icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Home</a>
          
        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/icon_explore.svg" alt="Explore icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Explore</a>
        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/icon_notifications.svg" alt="Notifications icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Notifications</a>
        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/icon_msg.svg" alt="Messages icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Messages</a>
        </div>

        <div class="aside-menu"> 
          <a href="https://github.com/twitter-web"><img src="/images/icon_book.svg" alt="Bookmarks icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Bookmarks</a>
        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/Lists.svg" alt="Lists icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Lists</a>
        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/icon_perfil.svg" alt="Profile icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">Profile</a>
        </div>

        <div class="aside-menu">
          <a href="https://github.com/twitter-web"><img src="/images/icon_default.svg" alt="More icon"></a>
          <a class="aside-font aside-menu-itens" href="https://github.com/twitter-web">More</a>
        </div>

        <button class="aside-menu-button" id="aside-btn-tweet">Tweet</button>

        <div class="aside-profile">
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
     </aside>
    `
  )
};

export const Light = Template.bind({});