
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

        profile_side.classList.toggle('aside-profile-color'); // change font color
    });
}
