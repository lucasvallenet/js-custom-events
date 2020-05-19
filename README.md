# @lucasvallenet/js-custom-events

![npm](https://img.shields.io/npm/v/@lucasvallenet/js-custom-events?style=flat-square)

Add custom events to window

## Installation

``
yarn add @lucasvallenet/js-custom-events
``

``
npm i @lucasvallenet/js-custom-events
``

## Usage

```js
// Import event
import { scrollstart } from '@lucasvallenet/js-custom-events'

// Execute function
scrollstart()

// Add callback
window.addEventListener('scrollstart', () => console.log('scrollstart'))
```

## Available events

##### Scroll triggers
`scrollstart` | `scrollend` 

##### Scroll directions Y
`scrollup` | `scrolldown`

##### Mouse move
`movestart` | `moveend` 