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

}