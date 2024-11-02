import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rightImg, watchImg } from '../Utils';
import VideoCarousel from './VideoCarousel';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    const titleAnimation = gsap.fromTo(".title", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".title",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    const linkAnimation = gsap.fromTo(".link", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".link",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    // Clean up function
    return () => {
      titleAnimation.kill();
      linkAnimation.kill();
    };
  }, []);

  return (
    <section id="highlights" className="highlights w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="title section-heading">Get the Highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link flex items-center">
              Watch The Film
              <img src={watchImg} alt="Watch icon" className="ml-2" aria-label="Watch The Film" />
            </p>
            <p className="link flex items-center">
              Watch The Events
              <img src={rightImg} alt="Arrow icon" className="ml-2" aria-label="Watch The Events" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
