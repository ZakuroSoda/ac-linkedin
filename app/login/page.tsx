import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import LoginForm from "./LoginForm"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      {session && (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
          <a href="/api/auth/signout">Sign out by link</a>
        </div>
      )}

      {!session && (
        <>
          <p>Not signed in</p>
          <LoginForm />
        </>
      )
      }
    </>
  );
}
