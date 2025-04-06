import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva('border-transparent gap-5 m-3 ', {
    variants: {
        flavours: {
            primary: ["bg-blue-600", "text-white",],
            success: ["bg-green-600", "text-white",],
            warning: ["bg-yellow-500", "text-white",],
            danger: ["bg-red-500", "text-white", ],
            inverse: ["bg-gray-600", "text-white",],
            purple: ["bg-purple-900", "text-white",],


        },
        sizes: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
            large: ["text-base", "py-4", "px-8"],
            extraLarge: ["text-base", "py-4", "px-12"],
        },
        roundness: {
            square: [],
            small: ["rounded-sm"],
            base: ["rounded"],
            medium: ["rounded-md"],
            large: ["rounded-lg"],
            extraLarge: ["rounded-xl"],
            doubleExtraLarge: ["rounded-2xl"],
            circular: ["rounded-full"],
        },
    },
    compoundVariants: [
        {
            flavours: "primary",
            class: "hover:bg-blue-700",
        },
        {
            flavours: "success",
            class: "hover:bg-green-700",
        },
        {
            flavours: "warning",
            class: "hover:bg-yellow-600",
        },
        {
            flavours: "danger",
            class: "hover:bg-red-600",
        },
        {
            flavours: "inverse",
            class: "hover:bg-gray-700",
        },
        {
            flavours: "purple",
            class: "hover:bg-purple-800",
        },
        { flavours: "primary", sizes: "medium", roundness: "square", class: "hover:bg-blue-700" },
    ],
    defaultVariants: {
        flavours: "primary",
        sizes: "small",
        roundness: "square"
    },
});

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
                                                  className,
                                                  flavours,
                                                  sizes,
                                                  roundness,
                                                  ...props
                                              }) => (
    <button
        className={button({ flavours, sizes,roundness, className })}
        {...props}
    />
);