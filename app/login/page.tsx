import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import LoginForm from "./LoginForm"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session?.user) {
    redirect("/")
  }
  return (
    <>
      <LoginForm />
    </>
  );
}
