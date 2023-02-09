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
          duration: .2,
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
          duration: .2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };