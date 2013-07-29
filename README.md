# Placeholder

> If you are looking for a compatible placeholder that works with input and textarea, it's not for you.

## Installation

    $ component install lepture/placeholder

## Features

This is a fake placeholder for contenteditable element, it only support sane browsers.

## Examples

Your element should contain a `data-placeholder`:

```html
<div contenteditable data-placeholder="Your content here"></div>
```

Enable the placeholder:

```js
var placeholder = require('placeholder');

// enable for all elements that has [data-placeholder]
placeholder();

// enable for specified elements
placeholder($('#editable'));
```

## License

MIT
