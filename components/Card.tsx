import React, { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    className?: string
}

export const Card = ({ children, className = '' }: CardProps) => (
    <div className={`rounded-lg bg-white shadow-md ${className}`}>
        {children}
    </div>
)

export const CardContent = ({
    children,
    className = '',
}: {
    children: ReactNode
    className?: string
}) => <div className={`p-4 ${className}`}>{children}</div>
