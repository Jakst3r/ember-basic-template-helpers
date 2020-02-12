ember-basic-template-helpers
==============================================================================
**Note: This is a learning project and not intended for production level applications**

This add-on provides some very basic helpers for simple use cases. It aims to avoid adding extra CSS selectors or computed properties to service basic template needs.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


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
+ [`debug`](#debug)
+ [`invert-bool`](#invert-bool)
+ [`capitalise`](#capitalise)


Helpers
------------------------------------------------------------------------------
#### `debug`
Adds a new DEBUG line to the console for each string argument passed to the helper.

```hbs
{{db "A Debug Message" "Another Debug Message"}}
```

#### `invert-bool`
Takes a boolean value as the first argument and returns the opposite value

```hbs
{{invert-bool true}}

returns false
```

#### `capitalise`
Takes a string of any case and return the same string in uppercase

```hbs
{{capitalise 'string'}}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
