"use client"
// This tells Next.js to run this function on the client side

import React, { ComponentProps } from "react"
import { useFormStatus } from "react-dom"
// I extracted this component from the Form component to make it reusable
// I also added a loading state to the button to show a spinner when the form is submitting
// Since the button was originally in a server-side form, I had to change it to a client-side form

type FormSubmitButtonProps = {
  children: React.ReactNode,
  className?: string
} & ComponentProps<"button">

const FormSubmitButton = (
{children, className, ...props}: FormSubmitButtonProps,
) => {
  const { pending } = useFormStatus()
return (
<button
{...props}
className={`btn btn-primary ${className}`}
type="submit"
disabled={pending}
>
  {pending && <span className="loading loading-spinner">⏳</span>}
  {children}</button>
)
}

export default FormSubmitButton