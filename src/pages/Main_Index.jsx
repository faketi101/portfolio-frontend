import React, { lazy, Suspense } from "react";
import Loading from "../Components/Loading/Loading";
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Freelancer = lazy(() => import("./components/Freeelancer"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Work = lazy(() => import("./components/Work"));

const Main_Index = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <About />
        <Services />
        <Freelancer />
        <Work />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};
export default Main_Index;
