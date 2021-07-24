# shar-teel

Consistently shard a value in any given array.

## Installation

```sh
yarn install shar-teel
```

## Usage

```js
const sharTeel = require('shar-teel');

// This is the array of possible values
const servers = ["amn", "baldur", "cormyr"];

// This is the key on which to shard. It can be anything: an id, an email, an url, etc
const key = "gorion@candlekeep.com";

// This is the shard, one of the three possible server, randomly selected
// The same key will consistently return the same shard
const shard = sharTeel(servers, key)
```

## Why would I need this?

This can be used in a load-balancing logic. You might want to split your traffic
between different servers, read your data from different replica databases or
parrallelize heavy operation accross different machines.

`shar-teel` helps in picking a random value out of a set, in a consistent way.
This means that running the same `sharTeel(possibleValues, key)` is idempotent
and will always return the same value.

## Why this name?

`shard` was already taken as an npm module. I tend to name my projects from
characters of my favorite books and video games. Shar-Teel is a character in
Baldur's Gate.

