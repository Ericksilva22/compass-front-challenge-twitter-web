export function imgPost(): void {

    const inputFile = document.querySelector<HTMLInputElement>(".label-media")!;
    const preview_img = document.querySelector<HTMLElement>("#preview-image")!;
    const main_actions = document.querySelector<HTMLElement>(".main-actions")!;
    const btn_tweet = document.querySelector<HTMLElement>("#btn-tweet-post")!;
    

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

    btn_tweet.addEventListener("click", function(){
        preview_img.style.display = 'none';
        main_actions.style.width = '255%';     
    });
}
