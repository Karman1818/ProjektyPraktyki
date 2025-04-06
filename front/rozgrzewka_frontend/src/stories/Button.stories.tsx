import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../app/ui/Button';
import React from "react";


export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        flavours: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'danger', 'inverse', 'purple'],
        },
        sizes: {
            control: 'select',
            options: ['small', 'medium', 'large', 'extraLarge'],
        },
        roundness: {
            control: 'select',
            options: ['square', 'small', 'base', 'medium', 'large', 'extraLarge', 'doubleExtraLarge', 'circular'],
        },
    },
} as ComponentMeta<typeof Button>;

export const Primary = {
    args: {
        children:'Hello World!',
        flavours: 'primary',
    },
    render: (args) => <Button {...args}/>
};

export const Success = {
    args: {
        children:'Hello World!',
        flavours: 'success',
    },
    render: (args) => <Button {...args}/>
};

export const Warning = {
    args: {
        children:'Hello World!',
        flavours: 'warning',
    },
    render: (args) => <Button {...args}/>
};

export const Danger = {
    args: {
        children:'Hello World!',
        flavours: 'danger',
    },
    render: (args) => <Button {...args}/>
};

export const Inverse = {
    args: {
        children:'Hello World!',
        flavours: 'inverse',
    },
    render: (args) => <Button {...args}/>
};

export const Purple = {
    args: {
        children:'Hello World!',
        flavours: 'purple',
    },
    render: (args) => <Button {...args}/>
};

