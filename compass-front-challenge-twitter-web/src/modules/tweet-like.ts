export function likePost(): void {

    const color_like = document.querySelectorAll<HTMLElement>(".color-like")!;
    const icon_like = document.querySelectorAll<HTMLElement>(".post-like-icon")!;
    const icon_unlike = document.querySelectorAll<HTMLElement>(".post-unlike-icon")!;

    for( let i = 0; i < icon_like.length; i++){

        icon_like[i].addEventListener("click", function():void{
      
            color_like[i].classList.toggle('post-actions-color');
            icon_like[i].classList.toggle('display-none');
            icon_unlike[i].classList.toggle('display-none');
        
        })

        icon_unlike[i].addEventListener("click", function():void{
      
            color_like[i].classList.toggle('post-actions-color');
            icon_like[i].classList.toggle('display-none');
            icon_unlike[i].classList.toggle('display-none');
        
        })

    }

    // like to new posts
    
    document.addEventListener("click", function(e:Event):void{

        const elementTarget = e.target as HTMLImageElement;
        const elementTextLike = document.querySelector<HTMLParagraphElement>(".content_like_new")!;

        if (elementTarget.classList.contains("icon_like")){

            if(elementTextLike.classList.contains("color-like")) {
                elementTextLike.innerHTML = '0';
                elementTextLike.classList.remove('color-like');
                elementTarget.src = "./public/images/Icon_Like.svg";
            } else {
                elementTarget.src = "./public/images/post_like.svg";
                elementTextLike.innerHTML = '1';
                elementTextLike.classList.add('color-like');
            }

           

        } 
       
    })

}

