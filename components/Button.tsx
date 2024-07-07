import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: 'default' | 'outline' | 'ghost'
    size?: 'default' | 'icon'
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'default',
    size = 'default',
    ...props
}) => {
    const baseStyle =
        'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants: Record<'default' | 'outline' | 'ghost', string> = {
        default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        outline:
            'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    }

    const sizes: Record<'default' | 'icon', string> = {
        default: 'px-4 py-2',
        icon: 'p-2',
    }

    const variantClass = variants[variant]
    const sizeClass = sizes[size]

    return (
        <button
            className={`${baseStyle} ${variantClass} ${sizeClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
