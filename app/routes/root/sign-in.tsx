import React from 'react'
import {Link, redirect} from "react-router";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";
import {loginWithGoogle} from "~/appwrite/auth";
import {account} from "~/appwrite/client";


export async function clientLoader() {
    try {
        const user = await account.get();
        if(user.$id) return redirect('/');
    } catch (e) {
        console.log("Error fetching user");
    }
}


const SignIn = () => {


    return (
       <main className='auth'>
           <section className="size-full glassmorphism flex-center">
           <div className="sign-in-card">
               <header className="header">
                   <Link to="/">
                        <img
                            src="/assets/img/logo.svg"
                            alt='logo'
                            className='size-[30px]'
                        />
                   </Link>
                   <h1 className="p-28-bold text-dark-100">
                       Touvisto
                   </h1>
               </header>
               <article>
                   <h2 className="p-28-bold text-dark-100 text-center">
                       Start Your Travel Journey
                   </h2>
                   <p className="p-18-regular text-center text-gray-100 !leading-7">
                    Sign in with Google
                   </p>
               </article>
               <ButtonComponent
                   type="button"
                   iconCss="e-search-icon"
                   className="button-class !h11 !w-full"
                   onClick={loginWithGoogle}
               >
                   <img
                   src="/assets/icons/google.svg"
                  className="size-5"
                   alt={"google"}
                   />
                   <span className="p-18-semibold">Sign in with google</span>
               </ButtonComponent>
           </div>
       </section></main>
    )
}
export default SignIn
