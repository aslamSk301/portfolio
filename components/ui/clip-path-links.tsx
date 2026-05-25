"use client";

import React from "react";
import { SiGoogle, SiGooglechrome } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Phone, Globe } from "lucide-react";
import { useAnimate } from "framer-motion";

export const ClipPathLinks = () => {
  return (
    <div className="divide-y border divide-border border-border rounded-2xl overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-border">
        <LinkBox
          Icon={SiGoogle}
          href="https://mail.google.com/mail/u/0/?fs=1&to=aslamsha299@gmail.com&tf=cm"
        />
        <LinkBox
          Icon={FaGithub}
          href="https://github.com/aslamSk301"
        />
      </div>
      <div className="grid grid-cols-4 divide-x divide-border">
        <LinkBox
          Icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/aslam-shahmadar-editbysk/"
        />
        <LinkBox
          Icon={Phone}
          href="tel:+919998667720"
        />
        <LinkBox
          Icon={Globe}
          href="https://storycean.com/"
        />
        <LinkBox
          Icon={FaInstagram}
          href="https://www.instagram.com/aslamqadri_313/"
        />
      </div>
      <div className="grid grid-cols-3 divide-x divide-border">
        <LinkBox
          Icon={FaXTwitter}
          href="https://x.com/aslam_qadri_"
        />
        <LinkBox
          Icon={SiGooglechrome}
          href="https://chromewebstore.google.com/detail/mailpilot-ai/dbkkgledbppefglfibjpbhpgficpnmeb"
        />
        <LinkBox
          Icon={Globe}
          href="https://play.google.com/store/apps/details?id=com.appsnap.storycean"
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon?: React.ComponentType<{ className?: string }>;
  href: string;
  imgSrc?: string;
  className?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, imgSrc, className }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
    const box = (e.currentTarget as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-foreground bg-background cursor-pointer"
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="link icon"
          className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
        />
      ) : (
        Icon && <Icon className="text-xl sm:text-3xl md:text-4xl" />
      )}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-primary text-primary-foreground transition-colors duration-300"
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="link icon hover"
            className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
          />
        ) : (
          Icon && <Icon className="text-xl sm:text-3xl md:text-4xl" />
        )}
      </div>
    </a>
  );
};
