"use client";
import Lottie from "lottie-react";
import { Dispatch, SetStateAction } from "react";
import Main from "../public/animation/animation-junplid-cloud.json";

interface PropsAnimationMainSection1Component_I {
  onComplete: Dispatch<SetStateAction<boolean>>;
}

export default function AnimationMainSection1Component(
  props: PropsAnimationMainSection1Component_I,
): JSX.Element {
  return (
    <Lottie
      style={{ minWidth: 200 }}
      defer
      aria-label='Junplid'
      loop={false}
      animationData={Main}
      onComplete={(event) => props.onComplete(true)}
    />
  );
}
