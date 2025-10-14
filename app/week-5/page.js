import React from "react";
import Link from "next/link";
import NewItem from "./new-item";

export default function Week5() {
  return (
    <main>
      <h1>CPRG 306 WebDev 2 - Week 5</h1>
      <p><Link href="/">Home</Link></p>
      <NewItem />

    </main>
  );
}

