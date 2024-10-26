import { Fetcher } from "@/components/Fetcher";
import Head from "next/head";

export default function Home() {
  
  return <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <h1>User Table</h1>
    <Fetcher url="https://jsonplaceholder.typicode.com/users" />

   {/* <Fetcher url={'https://jsonplaceholder.typicode.com/users'} callback={data=>setUser(data)}/>
   {user && <User user={user} />}
    */}
  </>;
}
