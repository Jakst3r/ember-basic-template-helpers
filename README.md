ember-basic-template-helpers
==============================================================================

This add-on provides some very basic helpers for simple use cases. It aims to avoid adding extra CSS selectors or computed properties to service basic template needs.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-basic-template-helpers
```


Usage
------------------------------------------------------------------------------
All helpers are invoked as any other normal ember helper.

Contents
------------------------------------------------------------------------------
*[`debug`](#debug)
*[`invert-bool`]('invert-bool)

Helpers
------------------------------------------------------------------------------
#### `debug`
Adds a number a DEBUG line to the console for each string argument passed to the helper.

```hbs
{{db "A Debug Message" "Another Debug Message"}}
```

#### `invert-bool`
Takes a boolean value as the first argument and returns the opposite value

```hbs
{{invert-bool true}}

returns false
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
