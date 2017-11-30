A library of string validators and sanitizers.

Strings only

This library validates and sanitizes strings only.

If you're not sure if your input is a string, coerce it using input + ''. Passing anything other than a string is an error.

Installation and Usage

Server-side usage

Install the library with npm install validator

No ES6

var validator = require('validator');

validator.isEmail('foo@bar.com'); //=> true
ES6

import validator from 'validator';
Or, import only a subset of the library:

import isEmail from 'validator/lib/isEmail';
Client-side usage

The library can be loaded either as a standalone script, or through an AMD-compatible loader

<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail('foo@bar.com'); //=> true
</script>
The library can also be installed through bower

$ bower install validator-js