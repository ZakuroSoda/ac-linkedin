import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Edit from "./Edit"

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    redirect("/login")
  }
  return (
    <>
      <Edit />
    </>
  );
}
