import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { User } from "../components/User";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return <div>
    <h1 className='text-4xl'>Home</h1>
    <Link className={buttonVariants()} href='/admin'>Open my admin</Link>
    <div>client session</div>
    <User/>
    <div>Server session</div>
    {JSON.stringify(session)}

  </div>;
}
