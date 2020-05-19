# @lucasvallenet/js-custom-events

![npm](https://img.shields.io/npm/v/@lucasvallenet/js-custom-events?style=flat-square)

Add custom events to window or DOM element

## Installation

``
yarn add @lucasvallenet/js-custom-events
``

``
npm i @lucasvallenet/js-custom-events
``

## Usage

##### Add an event to window

```js
// Import event
import { scrollstart } from '@lucasvallenet/js-custom-events'

// Execute function
scrollstart()

// Add callback (window by default)
window.addEventListener('scrollstart', () => console.log('scrollstart'))
```

##### Add an event to a DOM element

```js
// Import event
import { movestart } from '@lucasvallenet/js-custom-events'

// Get DOM element
const myDiv = document.getElementById('my-div')

// Execute function with the DOM element as parameter
movestart(myDiv)

// Add callback 
myDiv.addEventListener('movestart', () => console.log('movestart'))
```

## Available events

##### Scroll triggers
`scrollstart` | `scrollend` 

##### Scroll directions Y
`scrollup` | `scrolldown`

##### Mouse move
`movestart` | `moveend` 