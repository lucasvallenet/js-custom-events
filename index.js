/**
 * Check if element is Window
 * @return {boolean}
 */

function isWindow(element) {
    return element === window
}


/**
 * Check if element is a DOM element
 * @return {boolean}
 */

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument
}


/**
 * Check if element is Window or DOM element
 * @return {boolean}
 */

function isValid(element) {
    return isWindow(element) || isElement(element)
}


/**
 * Add scrollstart event to element (window by default)
 * @return {void}
 */

export const scrollstart = (element=window) => {

    // Check element
    if(!isValid(element)) {
        return false
    }

    let timer = null;
    const scrollstart = new CustomEvent('scrollstart');

    element.addEventListener('scroll', (e) => {

        // Dispatch event
        if (!timer) {
            element.dispatchEvent(scrollstart);
        } else {
            clearTimeout(timer)
        }

        // Reset timer after 200ms of scroll idle
        timer = setTimeout(() => {
            timer = null;
        }, 200);
    });
};


/**
 * Add scrollend event to element (window by default)
 * @return {void}
 */

export const scrollend = (element=window) => {

    // Check element
    if(!isValid(element)) {
        return false
    }

    let timer = null;
    const scrollend = new CustomEvent('scrollend');

    element.addEventListener('scroll', (e) => {

        // Clear scroll timer
        if (timer) {
            clearTimeout(timer);
        }

        // Dispatch event 200ms after scroll idle
        timer = setTimeout(() => {
            timer = null;
            element.dispatchEvent(scrollend);
        }, 200);
    });
};


/**
 * Add scrollup event to element (window by default)
 * @return {void}
 */

export const scrollup = (element=window) => {

    // Check element
    if(!isValid(element)) {
        return false
    }

    let scrollTop = element.scrollTop;
    let previousScrollTop = scrollTop;
    let direction = 0;
    const scrollup = new CustomEvent('scrollup');
    const scrollEvent = isWindow(element) ? 'scrollY' : 'scrollTop'

    element.addEventListener('scroll', (e) => {
        scrollTop = element[scrollEvent]

        // Scroll up
        if (scrollTop < previousScrollTop && direction > -1) {
            element.dispatchEvent(scrollup);
            direction = -1

        // Scroll down
        } else if(scrollTop > previousScrollTop && direction < 1) {
            direction = 1
        }

        previousScrollTop = scrollTop
    });
};


/**
 * Add scrolldown event to element (window by default)
 * @return {void}
 */

export const scrolldown = (element=window) => {

    // Check element
    if(!isValid(element)) {
        return false
    }

    let scrollTop = element.scrollTop;
    let previousScrollTop = scrollTop;
    let direction = 0;
    const scrolldown = new CustomEvent('scrolldown');
    const scrollEvent = isWindow(element) ? 'scrollY' : 'scrollTop'

    element.addEventListener('scroll', (e) => {
        scrollTop = element[scrollEvent]

        // Scroll up
        if (scrollTop < previousScrollTop && direction > -1) {
            direction = -1

        // Scroll down
        } else if(scrollTop > previousScrollTop && direction < 1) {
            element.dispatchEvent(scrolldown);
            direction = 1
        }

        previousScrollTop = scrollTop
    });
};


/**
 * Add movestart event to element (window by default)
 * @return {void}
 */

export const movestart = (element=window) => {

    // Check element
    if(!isValid(element)) {
        return false
    }

    let timer = null;
    const movestart = new CustomEvent('movestart');

    element.addEventListener('mousemove', (e) => {

        // Dispatch event
        if (!timer) {
            element.dispatchEvent(movestart);
        } else {
            clearTimeout(timer)
        }

        // Reset timer after 200ms of scroll idle
        timer = setTimeout(() => {
            timer = null;
        }, 200);
    });
};


/**
 * Add moveend event to element (window by default)
 * @return {void}
 */

export const moveend = (element=window) => {

    // Check element
    if(!isValid(element)) {
        return false
    }

    let timer = null;
    const moveend = new CustomEvent('moveend');

    element.addEventListener('mousemove', (e) => {

        // Clear scroll timer
        if (timer) {
            clearTimeout(timer);
        }

        // Dispatch event 200ms after scroll idle
        timer = setTimeout(() => {
            timer = null;
            element.dispatchEvent(moveend);
        }, 200);
    });
};
