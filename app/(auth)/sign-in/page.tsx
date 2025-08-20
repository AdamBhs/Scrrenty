"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Scrrenty</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="stars"
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              Scrrenty makes screen recording easy. From quick walkthroughs to
              full presentations, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src="/assets/images/adem.jpg"
                alt="jason"
                width={65}
                height={65}
                className="rounded-full"
              />
              <div>
                <h2>Adem Ben Hassine</h2>
                <p>Software Developer</p>
              </div>
            </article>
          </section>
        </div>
        <p> Scrrenty {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>Scrrenty</h1>
          </Link>
          <p>
            Create and share your very first <span>Scrrenty video</span> in no
            time!
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            Sign in with Google
          </button>
        </section>
      </aside>
      <div className="overlay"></div>
    </main>
  );
};

export default page;
