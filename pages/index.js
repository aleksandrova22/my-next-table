import { Fetcher } from "@/components/Fetcher";
import { ObjTable } from "@/components/ObjTable";
import Head from "next/head";
import { useState } from 'react';


export default function Home() {
  
  return <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <h1>Hello</h1>
    <Fetcher url="https://jsonplaceholder.typicode.com/users" />

   {/* <Fetcher url={'https://jsonplaceholder.typicode.com/users'} callback={data=>setUser(data)}/>
   {user && <User user={user} />}
    */}
  </>;
}
