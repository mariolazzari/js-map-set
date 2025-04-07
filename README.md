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

### Set key-value pair: set

```js
const meals = new Map();
meals.set("🍎", "breakfast");
meals.set("🍕", "lunch");
meals.set("🍔", "dinner");
meals.set("🎂", "dessert");
```

### Get key-value pair: get 

```js
const cookie = meals.get('🍪')
const donut = meals.get('🍩') // undefined
```

### Has key a value: has

```js
const cookie = meals.has('🍪') // true
const donut = meals.has('🍩') // false
```

### Map size property

```js
const mapSize = meals.size; // 4
```

### Remove key-value pairs: clear and delete

```js
let isDeleted = meals.delete('🍩') // true
isDeleted = meals.delete('♦️') // false
meals.clear() // remove all key-value pairs
```

### Iterators: keys and values

```js
// keys ordered list
const keys = meals.keys() 
const firstkey = keys.next().value

// values ordered list
const values = meals.values()
const firstVal = values.next().value
```

### Iterators: values

```js
// values retun key-value pairs collection
const entries = meals.entries()
const first = entries.next().value
```

### forEach: map.forEach(value, key, map, this)

```js
meals.forEach((value, key) =>{
    console.log(`Key ${key} value: ${value}`)
})
```

### groupBy (static method): Map.groupBy(collection, fn)
```js

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
```

## Weak Maps

Like Maps:
- key-value pairs
- set, get, delete, has

Unlike Maps:
- key must be an object
- does not have iterator and size
  
```js
const weakMap = new WeakMap()
const obj = { name: 'John' };
const obj2 = { name: 'Jane' };

weakMap.set(obj, 'john');
weakMap.set(obj2, 'jane');

weak.get(obj); // john
weak.get(obj2); // jane
weak.has(obj); // true
weak.has(obj2); // true

weak.size; // undefined

weak.delete(obj); // remove obj from weak map
weak.has(obj); // false
weak.has(obj2); // true
```

## Sets

Collections of unique values

- No duplicates
- Any type of value
- Size property

```js
const invites = new Set()
```

### add

```js
invites.add("mario")
    .add("Maria")
    .add("Mariarosa)
    .add("Roberto")
    .add("mario") // ignored
```

### has

```js
let invited = invites.has("Mario") // true
invited = invites.has("mike") // false
```