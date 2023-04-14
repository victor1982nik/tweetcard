import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Header, Main } from "./SharedLayout.styled";

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
