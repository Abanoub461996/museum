import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

import { LoaderWrapper } from "./Loader.styles";
import { useScramble } from "use-scramble";

export enum LoaderType {
  actual = "actual",
  fake = "fake",
}
const Loader = ({ type }) => {
  gsap.registerPlugin(TextPlugin);
  const { ref, replay } = useScramble({
    text: (type = LoaderType.actual
      ? "We are loading a lot of high quality media and data so it may take a while, but worth the wait."
      : "We are pretending to load data for you, thanks for the wait."),
  });
  useGSAP(() => {
    var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

    tl.to(".loader__header .replacable", {
      duration: 1,
      text: "...",
      ease: "none",
      repeatDelay: 2,
      repeat: -1,
    });
  });
  return (
    <LoaderWrapper>
      <div className="loader__header font-paintings flex justify-center">
        <div>LOADING</div>
        <div className="replacable"></div>
      </div>
      <div className="loader__msg font-truculenta" ref={ref}>
        loading
      </div>
    </LoaderWrapper>
  );
};
export default Loader;
