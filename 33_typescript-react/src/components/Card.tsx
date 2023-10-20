import React from 'react'

interface CardProps {
    title: string;
    children: React.ReactNode;
}

export default function Card({title, children}: CardProps) {
  return (
    <>
    <div>{title}</div>
    <div>{children}</div>
    </>
  )
}
