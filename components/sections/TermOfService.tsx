"use client";

import React from "react";
import Notice from "../Notice";
import { PiStarFourFill } from "react-icons/pi";

function TermOfService() {
  return (
    <div className="min-h-[150vh]">
      <div>
        <p className="relative text-6xl font-carattere text-main before:content-[''] before:absolute before:right-0 before:bottom-1/2 before:-translate-y-1/2 md:before:w-2/5 before:w-1/5 before:h-[2px] before:bg-white">
          Term Of Service
        </p>
      </div>

      <Notice type="info" message="Last update: 15 June 2025" />
      <div className="mt-6 md:max-h-[90vh] overflow-y-scroll">
        <BeforeWeStart />
        <GeneralTerm />
        <ProgressTerm />
        <PaymentTerm />
        <UsageTerm />
      </div>
    </div>
  );
}

export default TermOfService;

type StartingTerm =
  | string
  | {
      text: string;
      link: {
        label: string;
        href: string;
      };
    };

const StartingTerms: StartingTerm[] = [
  "I am a friendly and fun person hehe",
  "By commissioning me, you accept the terms and conditions below.",
  "All information sent will be kept confidential.",
  {
    text: "Get the projects example ",
    link: {
      label: "here",
      href: "https://drive.google.com/drive/folders/1gABlu_fmFgjiwhYvzY2hoqHsTyCVPusg",
    },
  },
  "There are no refunds when the project is completed.",
];

export function BeforeWeStart() {
  return (
    <div>
      <div className="flex flex-row gap-3 mt-6 items-center">
        <PiStarFourFill />
        <p className="text-base text-secondary">Before we start</p>
      </div>

      <ul className="ml-4 mt-3 flex flex-col gap-3">
        {StartingTerms.map((item, idx) => (
          <li key={idx} className="flex flex-row gap-1 md:gap-3">
            <PiStarFourFill className="scale-75" />
            {typeof item === "string" ? (
              <p className="text-xs md:text-sm max-w-[90%] leading-[150%]">
                {item}
              </p>
            ) : (
              <>
                <p className="text-xs md:text-sm max-w-[90%] leading-[150%]">
                  {item.text}
                </p>
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-main underline"
                >
                  {item.link.label}
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// General Term

type GeneralTerm = string;

const GeneralTerms: GeneralTerm[] = [
  "Youtube chat custom CSS can currently only be used on OBS due to YouTube provisions which make other broadcasting software fail to include Custom CSS into YouTube Livechat (Until further information).",
  "I do not provide additional assets for livechat (assets from clients), i only make simple assets, because i am not an artist hehe.",
  "Work estimates can be known after discussion because it depends on the progress currently underway.",
  "Keep in mind that there are several shapes of Livechat design that are quite impossible to code, but i will try my best.",
];

export function GeneralTerm() {
  return (
    <div>
      <div className="flex flex-row gap-3 mt-6 items-center">
        <PiStarFourFill />
        <p className="text-base text-secondary ">General</p>
      </div>

      <ul className="ml-4 mt-3 flex flex-col gap-3">
        {GeneralTerms.map((item, idx) => (
          <li key={idx} className="flex flex-row gap-1 md:gap-3 items-top  ">
            <PiStarFourFill className="scale-75 mt-[2px]" />
            <p className="text-xs md:text-sm max-w-[90%] leading-[150%]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Progress terms

type ProgressTerm = string;

const ProgressTerms: ProgressTerm[] = [
  "The project will be carried out if we both agree to start.",
  "I'll let you know the progress update every at least 2 days.",
  "You have the right to ask for progress updates.",
];

export function ProgressTerm() {
  return (
    <div>
      <div className="flex flex-row gap-3 mt-6 items-center">
        <PiStarFourFill />
        <p className="text-base text-secondary ">Progressions</p>
      </div>

      <ul className="ml-4 mt-3 flex flex-col gap-3">
        {ProgressTerms.map((item, idx) => (
          <li key={idx} className="flex flex-row gap-1 md:gap-3 items-top  ">
            <PiStarFourFill className="scale-75 mt-[2px]" />
            <p className="text-xs md:text-sm max-w-[90%] leading-[150%]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Payment terms

type PaymentTerm = string;

const PaymentTerms: PaymentTerm[] = [
  "Payment can be made in full at the end of the project completion.",
  "Payment can be made via Dana (Virtual Account) / Trakteer for Indonesian, KO-FI / Paypal for international payment.",
  "The package price listed above is the initial price and the price can increase depending on the difficulty of working.",
  "If there is a price increase, I will let you know after design .",
];

export function PaymentTerm() {
  return (
    <div>
      <div className="flex flex-row gap-3 mt-6 items-center">
        <PiStarFourFill />
        <p className="text-base text-secondary ">Payment</p>
      </div>

      <ul className="ml-4 mt-3 flex flex-col gap-3">
        {PaymentTerms.map((item, idx) => (
          <li key={idx} className="flex flex-row gap-1 md:gap-3 items-top  ">
            <PiStarFourFill className="scale-75 mt-[2px]" />
            <p className="text-xs md:text-sm max-w-[90%] leading-[150%]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Usage terms

type UsageTerm = string;

const UsageTerms: UsageTerm[] = [
  "One item can only be used for one charecter.",
  "You are allowed to edit the colors by yourself.",
  "You are NOT allowed to resell the product.",
  "If there are errors or updates from YouTube, an additional fee may be charged depending on the complexity (it could be free).",
];

export function UsageTerm() {
  return (
    <div>
      <div className="flex flex-row gap-3 mt-6 items-center">
        <PiStarFourFill />
        <p className="text-base text-secondary ">Usage</p>
      </div>

      <ul className="ml-4 mt-3 flex flex-col gap-3">
        {UsageTerms.map((item, idx) => (
          <li key={idx} className="flex flex-row gap-1 md:gap-3 items-top  ">
            <PiStarFourFill className="scale-75 mt-[2px]" />
            <p className="text-xs md:text-sm max-w-[90%] leading-[150%]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
