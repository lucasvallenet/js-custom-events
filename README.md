# scrollevents
Add custom scroll events to window


## Usage

```js
// Import event
import { scrollStart } from 'scrollevents'

// Execute function
scrollStart()

// Add callback
window.addEventListener('scrollstart', => console.log('scrollstart'))
```

## Available events

##### Triggers
`scrollstart` | `scrollend` 

##### Directions
`scrollup` | `scrolldown`