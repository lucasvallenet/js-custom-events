/**
 * Add scrollstart event to window
 * @return {void}
 */

export const scrollStart = () => {
    let scrollTimer = null;
    const scrollstart = new CustomEvent('scrollstart');

    window.addEventListener('scroll', (e) => {

        // Dispatch event
        if (!scrollTimer) {
            window.dispatchEvent(scrollstart);
        } else {
            clearTimeout(scrollTimer)
        }

        // Reset timer after 200ms of scroll idle
        scrollTimer = setTimeout(() => {
            scrollTimer = null;
        }, 200);
    });
};


/**
 * Add scrollend event to window
 * @return {void}
 */

export const scrollEnd = () => {
    let scrollTimer = null;
    const scrollend = new CustomEvent('scrollend');

    window.addEventListener('scroll', (e) => {

        // Clear scroll timer
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }

        // Dispatch event 200ms after scroll idle
        scrollTimer = setTimeout(() => {
            scrollTimer = null;
            window.dispatchEvent(scrollend);
        }, 200);
    });
};


/**
 * Add scrollup event to window
 * @return {void}
 */

export const scrollUp = () => {
    let scrollY = window.scrollY;
    let previousScrollY = scrollY;
    let direction = 0;
    const scrollup = new CustomEvent('scrollup');

    window.addEventListener('scroll', (e) => {
        scrollY = window.scrollY
        
        // Scroll up
        if (scrollY < previousScrollY && direction > -1) {
            window.dispatchEvent(scrollup);
            direction = -1

        // Scroll down
        } else if(scrollY > previousScrollY && direction < 1) {
            direction = 1
        }

        previousScrollY = scrollY
    });
};


/**
 * Add scrolldown event to window
 * @return {void}
 */

export const scrollDown = () => {
    let scrollY = window.scrollY;
    let previousScrollY = scrollY;
    let direction = 0;
    const scrolldown = new CustomEvent('scrolldown');

    window.addEventListener('scroll', (e) => {
        scrollY = window.scrollY
        
        // Scroll up
        if (scrollY < previousScrollY && direction > -1) {
            direction = -1
        
        // Scroll down
        } else if(scrollY > previousScrollY && direction < 1) {
            window.dispatchEvent(scrolldown);
            direction = 1
        }

        previousScrollY = scrollY
    });
};