import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [content, setContent] = useState([]);
  const [clone, setClone] = useState([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    const images = [
      { img: "/images/david-goldman-ur9iHMV-7ug-unsplash.jpeg", alt: "test" },
      { img: "/images/derek-lee-TtI1hMozGD4-unsplash.jpeg", alt: "test" },
      {
        img: "/images/gantas-vaiciulenas-C3ozeL6WiUg-unsplash.jpeg",
        alt: "test",
      },
      { img: "/images/masahiro-miyagi-RpwSEumLzko-unsplash.jpeg", alt: "test" },
    ];
    setContent(images);
    setClone(images);
  }, []);

  useEffect(() => {
    if (inView) {
      setClone([...clone, ...content]);
    }
  }, [inView, clone, content]);

  return (
    <div className="scrollable">
      {clone &&
        clone.map((item, i) => (
          <div ref={ref} key={i}>
            <Image
              src={item.img}
              alt={item.alt}
              width={550}
              height={350}
              priority="true"
            />
          </div>
        ))}
    </div>
  );
}
