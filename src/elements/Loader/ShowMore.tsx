import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

const LoadMore = ({ msg, replacable }) => {
  useGSAP(() => {
    var tl = gsap.timeline({ defaults: { duration: 1, ease: "none" } });
    gsap.registerPlugin(TextPlugin);
    tl.to(".replacable", {
      duration: 1,
      text: replacable,
      ease: "none",
      repeatDelay: 2,
      repeat: -1,
    });
  });
  return (
    <div>
      <div className="font-bold text-[2em] font-truculenta flex justify-center">
        <div>{msg}</div>
        <div className="replacable"></div>
      </div>
    </div>
  );
};
export default LoadMore;
