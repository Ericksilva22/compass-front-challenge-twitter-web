// Input.stories.ts

import { Meta, StoryFn } from '@storybook/html';


export default {
    title: 'Component/input',
} as Meta;

export function iconInputFile(){
    return(
        `
        <label class="label-media">
            <input class="input-media" type="file" accept="image/*">
            <img src="/images/icon media.svg" alt="media icon">
        </label>
        `
    )
}
