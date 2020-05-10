# @lucasvallenet/scrollevents

![npm](https://img.shields.io/npm/v/@lucasvallenet/scrollevents?style=flat-square)

Add custom scroll events to window

## Installation

``
yarn add @lucasvallenet/scrollevents
``

``
npm i @lucasvallenet/scrollevents
``

## Usage

```js
// Import event
import { scrollstart } from 'scrollevents'

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