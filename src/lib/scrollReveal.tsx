import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function ScrollAnimation(){
    useEffect(() => {
        ScrollReveal({
          distance: "60px",
          duration: 1500
        });
        ScrollReveal().reveal(".text", { delay: 300, origin: "left" });
        ScrollReveal().reveal(".paragraph", { delay: 500, origin: "top" });
        ScrollReveal().reveal(".button ", { delay: 600, origin: "bottom" });
        ScrollReveal().reveal(".img ", { delay: 700, origin: "right" });
        ScrollReveal().reveal(".card-1", { delay: 200, origin: "left" });
        ScrollReveal().reveal(".card-2", { delay: 300, origin: "bottom" });
        ScrollReveal().reveal(".card-3", { delay: 200, origin: "right" });
      }, []);
}