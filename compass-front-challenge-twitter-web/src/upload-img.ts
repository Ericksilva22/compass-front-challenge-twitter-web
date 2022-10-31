import { createPost } from './create-post'

export function imgPost(): void {

    const inputFile = document.querySelector<HTMLInputElement>(".label-media")!;
    const preview_img = document.querySelector<HTMLElement>("#preview-image")!;
    const main_actions = document.querySelector<HTMLElement>(".main-actions")!;
    const btn_tweet = document.querySelector<HTMLElement>("#btn-tweet-post")!;
    const text_tweet = document.querySelector<HTMLTextAreaElement>("#post_input")!;
    
    

    inputFile.addEventListener("change", function (e:Event){

        preview_img.style.display = 'block';
        main_actions.style.width = '100%'; 
        
        const inputTarget = e.target as HTMLInputElement;
        const file = inputTarget.files![0];

        if(file) {
            
            const reader = new FileReader();
            
            reader.addEventListener('load', function(e){
                
                const readerTarget = e.target!;
                
                const img = document.createElement("img");
                img.src = readerTarget.result as string;
                img.classList.add("preview-image-border");

                preview_img.innerHTML = "";
                preview_img.appendChild(img);
            
            });

            reader.readAsDataURL(file);
        } else {
            preview_img.innerHTML = "";
        }
    });

    btn_tweet.addEventListener("click", function(e){

        const img = preview_img.firstChild as HTMLElement;
        const text_written = text_tweet.value as string;
        e.preventDefault();
        createPost(text_written, img);

        preview_img.style.display = 'none';
        main_actions.style.width = '255%';    
    });
}
