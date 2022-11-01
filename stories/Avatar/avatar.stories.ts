// Avatar.stories.ts

import { Meta, StoryFn } from '@storybook/html';

export default {
    title: 'Component/Avatar',
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
        avLocation: {
            control: { type: 'text' },
        },
    }
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => {
    return newAvatar(args);
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};


export interface AvatarProps {
    size: 'small' | 'medium';
    avLocation?: string;
}

export const newAvatar = ({
    size,
    avLocation
} : AvatarProps) => {

    const avatar = document.createElement('picture');
    avatar.classList.add('avatar');

    avLocation = avLocation || '/images/Profile Picture.svg';

    avatar.innerHTML = `
        <img 
            class='avatar-${size} ' 
            src='${avLocation}'
        />
    `;

    return avatar;
}