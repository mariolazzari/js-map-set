# JavaScript Maps and Sets

## Maps

Like objects:

- both contain key-value pairs
- both allow get, set and delete key-value pairs

Key difference:

- Map does not contain default keys: thy must be set
- Map key can be any values, not string only
- Map has size property
- Map does not allow duplicate keys

```js
const map = new Map();
```

### set

```js
const meals = new Map();
meals.set("🍎", "breakfast");
meals.set("🍕", "lunch");
meals.set("🍔", "dinner");
meals.set("🎂", "dessert");
```

### get 

```js
const cookie = meals.get('🍪')
const donut = meals.get('🍩') // undefined
```