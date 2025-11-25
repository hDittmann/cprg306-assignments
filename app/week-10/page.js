"use client"

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="bg-gray-900 text-white p-8 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome To A Super Amazing Shopping List</h1>
        {!user ? (
          <div>
            <p className="mb-4">Please sign in with GitHub to continue.</p>
            <button onClick={handleSignIn} className="bg-blue-500 px-4 py-2 rounded">Sign in with GitHub</button>
          </div>
        ) : (
          <div>
            <p className="mb-4">Welcome, {user.displayName}! ({user.email})</p>
            <div className="flex justify-center gap-4">
              <Link href="/week-10/shopping-list" className="bg-green-500 px-4 py-2 rounded">Go to Shopping List</Link>
              <button onClick={handleSignOut} className="bg-red-500 px-4 py-2 rounded">Sign out</button>
            </div>
          </div>
        )}
      </div>
      <Link href="/">back</Link>
    </main>
  );
}
