"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import { signIn } from "next-auth/react"

export default function LoginForm() {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={async () => {
              if (!validateEmail(email)) {
                toast.error("Invalid email");
              } else {
                toast.loading("Sending magic link to your email...");
                const result = await signIn("email", {
                  email: email,
                  redirect: false,
                })

                if (result && !result.error) {
                  toast.dismiss();
                  toast.success(
                    "Check your inbox for the magic link to login!",
                  );
                } else {
                  toast.dismiss();
                  toast.error(result?.error);
                }
              }
            }}
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </>
  )
}

function validateEmail(email: string) {
  return email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  );
}