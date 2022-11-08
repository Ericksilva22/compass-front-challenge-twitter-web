import { createPost } from './create-post'

export function imgPost(): void {

    const inputFile = document.querySelector<HTMLInputElement>(".label-media")!;
    const preview_img = document.querySelector<HTMLElement>("#preview-image")!;
    const main_actions = document.querySelector<HTMLElement>(".main-actions")!;
    const btn_tweet = document.querySelector<HTMLElement>("#btn-tweet-post")!;
    let text_tweet = document.querySelector<HTMLTextAreaElement>("#post_input")!;
    
    

    inputFile.addEventListener("change", function (e:Event){

        preview_img.style.display = 'block';
        main_actions.style.width = '100%'; 
        const inputTarget = e.target as HTMLInputElement;
        const file = inputTarget.files![0];

        if(file) {
            
            const reader = new FileReader();
            text_tweet.style.width = '95%';

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

        e.preventDefault();

        const img = preview_img.firstChild as HTMLElement;
        let text_written = text_tweet.value as string;
        text_tweet.value = ''; // clear input

        createPost(text_written, img); // call function to create post
        
        btn_tweet.style.opacity = '0.5'; // change button tweet opacity
    
        preview_img.style.display = 'none'; //remove preview img on screen
        main_actions.style.width = '255%';  // fix width for form 
        text_tweet.style.width = '200%';    // change to original width
    });

}
