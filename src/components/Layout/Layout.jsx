import { Suspense } from "react";
// import Navigation from "../Navigation/Navigation";
// import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Suspense fallback={<div>Please wait loading page...</div>}>
        {children}
      </Suspense>
    </div>
  );
}