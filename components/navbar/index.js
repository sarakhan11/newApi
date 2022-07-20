import React from "react";
import Link from "next/link";
import Router from "next/router";
export default function index() {
  return (
    <>
    <nav>
        <ul className="flex items-center justify-center gap-x-4">
          <li
            onClick={() => Router.push("/")}
            className="cursor-pointer font-bold"
          >
            Page 1
          </li>

          <li
            onClick={() => Router.push("/aboutpage")}
            className="cursor-pointer font-bold"
          >
            Page 2
          </li>
          <li
            onClick={() => Router.push("/consequences")}
            className="cursor-pointer font-bold"
          >
            Page 3
          </li>
          <li
            onClick={() => Router.push("/form1")}
            className="cursor-pointer font-bold"
          >
            Page 4
          </li>
          <li
            onClick={() => Router.push("/call/api123")}
            className="cursor-pointer font-bold"
          >
            Page 5
          </li>
          <li
            onClick={() => Router.push("/GloryFurniture")}
            className="cursor-pointer font-bold"
          >
            Page 6
          </li>

        </ul>
 </nav>
 </>
);
}