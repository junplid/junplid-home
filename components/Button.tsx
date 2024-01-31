"use client";
import Link from "next/link";

interface props_I {
  value: string;
  link: string;
  active?: boolean;
}

export default function ComponentButton(props: props_I): JSX.Element {
  return (
    <Link href={props.link}>
      <button
        className={`rounded-lg px-4 font-medium py-2 text-base text-neutral-500 ${
          props.active
            ? "text-neutral-950 bg-slate-200 hover:bg-slate-300"
            : "hover:bg-slate-100"
        }`}
      >
        {props.value}
      </button>
    </Link>
  );
}
