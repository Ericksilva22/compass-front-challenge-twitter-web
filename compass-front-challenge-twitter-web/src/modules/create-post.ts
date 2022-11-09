

export function createPost(text_written: string, img_tweet:HTMLElement):void {

    const container_post = document.querySelector<HTMLElement>(".container-posts")!;

    const section_post = document.createElement("div");
    section_post.classList.add("section-post");
    section_post.classList.add("section-post-dark-mode");
    
    container_post.appendChild(section_post); // add post in main div

    const img_profile = document.createElement("img");
    img_profile.src = "./public/images/Profile Picture.svg";
    img_profile.classList.add("main-profile-icon");
    

    const figure_content = document.createElement("figure");
    figure_content.appendChild(img_profile);
    section_post.appendChild(figure_content);

    const div_generic = document.createElement("div");
    section_post.appendChild(div_generic);
    const section_post_title = document.createElement("div");
    section_post_title.classList.add("section-post-title");
    div_generic.appendChild(section_post_title);

    const userName = document.createElement("p");
    const tweet_time = document.createElement("p");
    

    userName.innerHTML = `Jerome Bell<span class="section-post-title-span">@afonsoinocente</span>`;
    userName.classList.add("section-post-title-h3");
    userName.classList.add("dark-mode-color-h3");

    tweet_time.innerHTML = "1s";
    tweet_time.classList.add("section-post-time");

    section_post_title.appendChild(userName);
    section_post_title.appendChild(tweet_time);

    const tweet_paragraph= document.createElement("p");
    tweet_paragraph.classList.add("section-post-paragraph");
    tweet_paragraph.innerHTML = text_written;
    div_generic.appendChild(tweet_paragraph);

    div_generic.appendChild(img_tweet);
    img_tweet.classList.add("section-post-img");

    const div_post_actions = document.createElement("div");
    div_post_actions.classList.add("post-actions");
    div_generic.appendChild(div_post_actions);

    //add comment icon
    const div_post_itens_comment = document.createElement("div"); //create div
    div_post_itens_comment.classList.add("post-actions-itens");
    div_post_itens_comment.classList.add("post-actions-color");

    const icon_comment = document.createElement("img"); //create img
    icon_comment.src = "./public/images/post_comment.svg";
    icon_comment.classList.add("post-comment-icon-new");

    const p_itens_comment = document.createElement("p"); // create text
    p_itens_comment.classList.add("content_comment_new");
    p_itens_comment.innerHTML = "0";

    div_post_itens_comment.appendChild(icon_comment); //add img for div
    div_post_itens_comment.appendChild(p_itens_comment); //add text for div

    div_post_actions.appendChild(div_post_itens_comment);


     //add retweet icon
     const div_post_itens_retweet = document.createElement("div"); //create div
     div_post_itens_retweet.classList.add("post-actions-itens");
     div_post_itens_retweet.classList.add("post-actions-color");

     const icon_retweet = document.createElement("img"); //create img
     icon_retweet.classList.add("icon_retweet");
     icon_retweet.src = "./public/images/post_retweet.svg";
 
     const p_itens_retweet = document.createElement("p"); // create text
     p_itens_retweet.innerHTML = "0";
 
     div_post_itens_retweet.appendChild(icon_retweet); //add img for div
     div_post_itens_retweet.appendChild(p_itens_retweet); //add text for div
 
     div_post_actions.appendChild(div_post_itens_retweet);

    
    //add like icon
    const div_post_itens_like = document.createElement("div"); //create div
    div_post_itens_like.classList.add("post-actions-itens");
    div_post_itens_like.classList.add("post-actions-color");

    const icon_like = document.createElement("img"); //create img
    icon_like.classList.add("icon_like");
    icon_like.src = "./public/images/Icon_Like.svg";
    

    const p_itens_like = document.createElement("p"); // create text
    p_itens_like.classList.add("content_like_new");
    p_itens_like.innerHTML = "0";

    div_post_itens_like.appendChild(icon_like); //add img for div
    div_post_itens_like.appendChild(p_itens_like); //add text for div

    div_post_actions.appendChild(div_post_itens_like);

    //add share icon
    const div_post_itens_share = document.createElement("div"); //create div
    div_post_itens_share.classList.add("post-actions-itens");
    div_post_itens_share.classList.add("post-actions-color");

    const icon_share = document.createElement("img"); //create img
    icon_share.src = "./public/images/post_share.svg";
 
    const p_itens_share = document.createElement("p"); // create text
    p_itens_share.innerHTML = "0";
 
    div_post_itens_share.appendChild(icon_share); //add img for div
    div_post_itens_share.appendChild(p_itens_share); //add text for div
 
    div_post_actions.appendChild(div_post_itens_share);

    //add show more link

    const show_thread = document.createElement("a");
    show_thread.classList.add("Show-thread");
    show_thread.classList.add("Show-more");
    show_thread.setAttribute("href", "https://github.com/twitter-web");
    const createAText = document.createTextNode('show this thread');
    show_thread.appendChild(createAText);

    div_generic.appendChild(show_thread);

    
}; 