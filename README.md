# @lucasvallenet/js-scrollevents

![npm](https://img.shields.io/npm/v/@lucasvallenet/js-scrollevents?style=flat-square)

Add custom scroll events to window

## Installation

``
yarn add @lucasvallenet/js-scrollevents
``

``
npm i @lucasvallenet/js-scrollevents
``

## Usage

```js
// Import event
import { scrollstart } from '@lucasvallenet/js-scrollevents'

// Execute function
scrollstart()

// Add callback
window.addEventListener('scrollstart', () => console.log('scrollstart'))
```

## Available events

##### Triggers
`scrollstart` | `scrollend` 

##### Directions
`scrollup` | `scrolldown`