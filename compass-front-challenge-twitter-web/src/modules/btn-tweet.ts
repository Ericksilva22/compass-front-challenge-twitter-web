
export function controlerBtn(): void {

    const side_btn_tweet = document.querySelector<HTMLButtonElement>("#aside-btn-tweet")!;
    const post_input = document.querySelector<HTMLButtonElement>("#post_input")!;

    side_btn_tweet.addEventListener("click", function focusInput():void{
        post_input.focus();
    });
}
