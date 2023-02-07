import { easeInOut } from "framer-motion"
export const variant = {
    hidden_x2: {opacity: 0, x : -200},
    hidden_x1: {opacity: 0, x : 200},
    visible: {opacity: 1, x: 0},
    transition: { ease: easeInOut ,duration: .5},
    fade: {opacity: .5, scale: .5},
    fadeIn: {opacity: 1, scale: 1}
}

export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        // scale: .7
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        // scale: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
export const scaleIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        scale: .7
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'tween',
          duration: .5,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };