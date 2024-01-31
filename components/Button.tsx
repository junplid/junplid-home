"use client";
import Link from "next/link";
import { useMemo } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 font-medium",
  variants: {
    theme: {
      primary: "rounded-lg text-neutral-500 text-base hover:bg-slate-100",
      secondary:
        "text-white text-lg py-4 tracking-wider hover:bg-blue-500 w-full",
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface props_I extends ButtonVariants {
  value: string;
  link: string;
  active?: boolean;
}

export default function ComponentButton(props: props_I): JSX.Element {
  const ss = useMemo(() => {
    if (props.theme === "primary") {
      return props.active
        ? "text-neutral-950 bg-slate-200 hover:bg-slate-300"
        : "";
    } else {
      return props.active ? "bg-blue-600 font-bold" : "";
    }
  }, [props.active, props.theme]);

  return (
    <Link href={props.link} className='w-full'>
      <button className={`${button({ theme: props.theme })} ${ss} `}>
        {props.value}
      </button>
    </Link>
  );
}
