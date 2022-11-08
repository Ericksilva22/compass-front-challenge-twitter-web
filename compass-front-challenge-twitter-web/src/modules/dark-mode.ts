
export function darkMode(): void {

    const side_menu = document.querySelector<HTMLElement>("#feed")!;
    const icon_dark = document.querySelector<HTMLElement>("#icon-dark-mode")!;

    //side menu - icons
    const logo_twitter_light = document.querySelector<HTMLElement>("#Logo_twitter-light")!;
    const logo_twitter_dark = document.querySelector<HTMLElement>("#Logo_twitter-dark")!;

    const Explore_light = document.querySelector<HTMLElement>("#Explore-light")!;
    const Explore_dark = document.querySelector<HTMLElement>("#Explore-dark")!;

    const Notifications_light = document.querySelector<HTMLElement>("#Notifications-light")!;
    const Notifications_dark = document.querySelector<HTMLElement>("#Notifications-dark")!;

    const Messages_light = document.querySelector<HTMLElement>("#Messages-light")!;
    const Messages_dark = document.querySelector<HTMLElement>("#Messages-dark")!;

    const Bookmarks_light = document.querySelector<HTMLElement>("#Bookmarks-light")!;
    const Bookmarks_dark = document.querySelector<HTMLElement>("#Bookmarks-dark")!;

    const Lists_light = document.querySelector<HTMLElement>("#Lists-light")!;
    const Lists_dark = document.querySelector<HTMLElement>("#Lists-dark")!;

    const Profile_light = document.querySelector<HTMLElement>("#Profile-light")!;
    const Profile_dark = document.querySelector<HTMLElement>("#Profile-dark")!;

    const More_light = document.querySelector<HTMLElement>("#More-light")!;
    const More_dark = document.querySelector<HTMLElement>("#More-dark")!;

    const Ellipses_light = document.querySelector<HTMLElement>("#Ellipses-light")!;
    const Ellipses_dark = document.querySelector<HTMLElement>("#Ellipses-dark")!;

    //side menu - font
    const itens_side = document.querySelectorAll<HTMLElement>(".aside-menu-itens")!;
    const profile_side = document.querySelector<HTMLElement>(".aside-profile-text-a")!;

    // main - header
    const header_title = document.querySelector<HTMLElement>("#header-title")!;

    //main - border 
    const mainFeed = document.querySelector<HTMLElement>(".main")!;
    const mainFeed_header = document.querySelector<HTMLElement>(".main__header")!;
    const spacer = document.querySelector<HTMLElement>(".spacer")!;
    const section_post = document.querySelectorAll<HTMLElement>(".section-post")!;

    //main - input
    const post_input = document.querySelector<HTMLElement>("#post_input")!;

    //main - tweets
    const tweets_title = document.querySelectorAll<HTMLElement>(".section-post-title-h3")!;
    const tweets_paragraph = document.querySelectorAll<HTMLElement>(".section-post-paragraph")!;

    //side column - search
    const search_input = document.querySelector<HTMLElement>(".search")!;

    //side column - news
    const section_news = document.querySelectorAll<HTMLElement>(".section-news")!;
    const news_text = document.querySelectorAll<HTMLElement>(".news-text")!;
    const section_news_contetent = document.querySelectorAll<HTMLElement>(".section-news-content")!;
    const follow_person = document.querySelectorAll<HTMLElement>(".follow-person")!;
    const follow_link = document.querySelectorAll<HTMLElement>(".follow-data-a")!;
    const button_follow = document.querySelectorAll<HTMLElement>(".btn-follow")!;
    
    
    icon_dark .addEventListener("click", function ():void{

        side_menu.classList.toggle('background-dark'); // change background color

        logo_twitter_light.classList.toggle('display-none'); //change icons
        logo_twitter_dark.classList.toggle('display-none');

        Explore_light.classList.toggle('display-none');
        Explore_dark.classList.toggle('display-none');

        Notifications_light.classList.toggle('display-none');
        Notifications_dark.classList.toggle('display-none');

        Messages_light.classList.toggle('display-none');
        Messages_dark.classList.toggle('display-none');

        Bookmarks_light.classList.toggle('display-none');
        Bookmarks_dark.classList.toggle('display-none');

        Lists_light.classList.toggle('display-none');
        Lists_dark.classList.toggle('display-none');

        Profile_light.classList.toggle('display-none');
        Profile_dark.classList.toggle('display-none');

        More_light.classList.toggle('display-none');
        More_dark.classList.toggle('display-none');

        Ellipses_light.classList.toggle('display-none');
        Ellipses_dark.classList.toggle('display-none');

        for( let i = 0; i < itens_side.length; i++){
            itens_side[i].classList.toggle('aside-font'); // change font color
            
        }

        profile_side.classList.toggle('dark-mode-color'); // change font color
        header_title.classList.toggle('dark-mode-color'); // change font color

        post_input.classList.toggle('background-dark'); // change background color

        for( let i = 0; i < tweets_title.length; i++){
            tweets_title[i].classList.toggle('section-post-title-h3'); // change font color 
        }

        for( let i = 0; i < tweets_paragraph.length; i++){
            tweets_paragraph[i].classList.toggle('section-post-paragraph'); // change font color
            
        }

        mainFeed.classList.toggle('main');
        mainFeed_header.classList.toggle('main__header');
        spacer.classList.toggle('spacer');

        for( let i = 0; i < section_post.length; i++){
            section_post[i].classList.toggle('section-post'); // change font color
            
        }

        search_input.classList.toggle('search-dark-mode');

        for( let i = 0; i < section_news.length; i++){
            section_news[i].classList.toggle('section-news-dark-mode');
        }

        for( let i = 0; i < news_text.length; i++){
            news_text[i].classList.toggle('news-text-dark-mode');
        }

        for( let i = 0; i < section_news_contetent.length; i++){
            section_news_contetent[i].classList.toggle('section-news-content-dark-mode');
        } 

        for( let i = 0; i < follow_person.length; i++){
            follow_person[i].classList.toggle('follow-person-dark-mode');
        } 

        for( let i = 0; i < follow_link.length; i++){
            follow_link[i].classList.toggle('follow-data-a-dark-mode');
        } 

        for( let i = 0; i < button_follow.length; i++){
            button_follow[i].classList.toggle('btn-follow-dark-mode');
        } 

        
    });
}
