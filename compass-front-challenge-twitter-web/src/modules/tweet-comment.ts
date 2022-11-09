export function commentPost(): void {

    const content_comment = document.querySelectorAll<HTMLElement>(".post-comment-content")!;
    const icon_comment = document.querySelectorAll<HTMLElement>(".post-comment-icon")!;

    const modal_close = document.querySelector<HTMLElement>(".modal-close")!;
    const modal_input = document.querySelector<HTMLTextAreaElement>(".modal_input")!;
    const button_modal = document.querySelector<HTMLElement>(".button-modal")!;

    const modal_comment = document.querySelector<HTMLElement>(".modal-comment")!;
    const fade = document.querySelector<HTMLElement>(".fade")!;

    for( let i = 0; i < icon_comment.length; i++){

        icon_comment[i].addEventListener("click", function():void{
      
            modal_comment.classList.toggle('modal-comment-opacity');
            fade.classList.toggle('display-none');

            button_modal.addEventListener("click", function():void{
    
                modal_comment.classList.toggle('modal-comment-opacity');
                fade.classList.toggle('display-none');
                content_comment[i].innerHTML = '62';
                modal_input.value = '';
            
            })

        })

    }

    modal_close.addEventListener("click", function():void{
      
        modal_comment.classList.toggle('modal-comment-opacity');
        fade.classList.toggle('display-none');
    
    })

    modal_input.addEventListener('keyup', function() {
        if (this.value.length > 0) {
            button_modal.style.opacity = '1';
        } else {
            button_modal.style.opacity = '0.5';
        }
    });
  
}