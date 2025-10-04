import React from "react";
import Link from "next/link";
import NewItem from "./new-item";

export default function Week4() {
  return (
    <main>
      <h1>CPRG 306 WebDev 2 - Week 4</h1>
      <p><Link href="/">Home</Link></p>
      <NewItem />
    </main>
  );
}

