
export function controlerBtn(): void {

    var side_btn_tweet = document.querySelector<HTMLButtonElement>("#aside-btn-tweet")!;
    var post_input = document.querySelector<HTMLButtonElement>("#post_input")!;

    side_btn_tweet.addEventListener("click", function focusInput():void{
        post_input.focus();
    });
}
