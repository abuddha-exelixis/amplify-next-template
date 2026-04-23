"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import Navigation from "@/components/ui/header";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/ui/footer";
import axios from 'axios';

Amplify.configure(outputs);

const client = generateClient<Schema>();


export default function signIn() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [email, setEmail] = useState('');

  const params = useSearchParams();
  const [isVisible, setIsVisible] =  useState(true);
  const [displaySuccessMsg, setDisplaySuccessMsg] =  useState(false);
  const [formMethod, setFormMethod] =  useState("POST");
  const [formURL, setFormURL] = useState('postAuth');
  const headerNavigation = [
  { key: 1, name: 'Home', href: '/', current: false },
  { key: 2, name: 'Register', href: '#', current: false },
  { key: 3, name: 'Sign In', href: '/signin', current: true },
  { key: 4, name: 'Community Support Donations', href: '/content/community-support-donations.html', current: false },
  { key: 5, name: 'Healthcare - Related Charitable Contributions', href: '/content/hrc_contributions.html', current: false },
  { key: 6, name: 'Independent Patient Assistance Foundation', href: '/content/ipaf.html', current: false },
  { key: 7, name: 'Medical Education Grants', href: '/content/meded.html', current: false },
  { key: 8, name: 'Sponsorships', href: '/content/sponsorships.html', current: false },
];
  const displayForgotPassword = () => { 
    setIsVisible(false);
    setDisplaySuccessMsg(false);
    setFormMethod("GET");
    setFormURL("recoverLink");
  }
  const displaySignIn = () => { 
    setIsVisible(true);
    setFormMethod("POST");
    setFormURL("postAuth");
  };

  // app/forgot-password/page.tsx
const sendEmail = async (e: any) => {
  e.preventDefault();
  axios.get('https://exelixisgrantsreview1.review.steeprockinc.com/b5login/recoverLink', {params:   {callback: 'jQuery21306882012291047174_'+Math.floor(Date.now() / 1000),email: email, _ : Math.floor(Date.now() / 1000),}}).then((response) => {
    setDisplaySuccessMsg(true);
    displaySignIn();
  }).catch((error) => {
    setDisplaySuccessMsg(true);
    displaySignIn();
  })  
};



  return (
    <>
      <Navigation navigation={headerNavigation} />

      <div className="max-w mx-auto">
        <div className="content-wrapper space-y-6">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">            
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">{isVisible?'Sign In':'Forgot Password'}</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className={displaySuccessMsg ? 'bg-blue-100 border text-blue-500 px-4 py-3 rounded relative': 'hidden'} role="info">
              <div className="py-1"><svg className="fill-current h-6 w-6 inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
                <span className="sm:inline">Reset password link will be sent to your email address within 5 minutes</span>  </div>
            </div>
              {params.get('loginError')? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <div className="py-1"><svg className="fill-current h-6 w-6 inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
                <span className="sm:inline">We could not verify your credentials. Try again or contact the <a className="underline" href="mailto:support@steeprockinc.com">system administrator</a>.</span>  </div>
            </div>):(<span></span>)}
              <form action={`https://exelixisgrantsreview1.review.steeprockinc.com/b5login/postAuth?errorCb=https%3A//main.dnzb1bknj52k5.amplifyapp.com//signin%3FloginError%3D1`} method={formMethod} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input id="email" type="email" name="username" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className={isVisible ? '': 'hidden'}>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>                    
                  </div>
                  <div className="mt-2">
                    <input id="password" type="password" name="password" required={isVisible} autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className={isVisible ? '': 'hidden'}>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in </button>
                </div>
                <div className={!isVisible ? '': 'hidden'}>
                  <button type="button" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={sendEmail}>Email New Password</button>
                </div>
                <div>
                  <div className="text-sm">
                      <a href="javascript:void(0);" onClick={displayForgotPassword} className={isVisible?'font-semibold text-600 hover:text-500':'hidden'}>Forgot your password?</a>  
                      <a href="javascript:void(0);" onClick={displaySignIn} className={!isVisible?'font-semibold text-600 hover:text-500':'hidden'}>Back to sign in</a>                      
                    </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}
