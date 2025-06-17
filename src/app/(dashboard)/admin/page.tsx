import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)

    if(session?.user){
        return <div className="text-2xl">Welcome to Admin page {session?.user.username}</div> 
    }
    return (
        <div>Please login ti see this admin page</div>
    ) 
}
 
export default page;