
export function buttonOpacity(): void {

    const inputForm = document.querySelector<HTMLTextAreaElement>('#post_input')!;
    const btn_tweet_post = document.querySelector<HTMLTextAreaElement>('#btn-tweet-post')!;

    inputForm.addEventListener('keyup', function() {
        if (this.value.length > 0) {
            btn_tweet_post.style.opacity = '1';
        } else {
            btn_tweet_post.style.opacity = '0.5';
        }
    });

}