import React from "react";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 hd:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple ~h-12/20" />
        </Link>
        <nav
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
          aria-label="Main"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8">
            <li>Boards</li>
            <li>Boards</li>
            <li>Boards</li>
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink href="/" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
