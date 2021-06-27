// 1. Please write a function that reverses a string

const string_to_reverse = 'Patrycja';
let reversed_string = '';

for ( x = string_to_reverse.length; x >= 0; x-- ) {
  if (string_to_reverse[x] != undefined) {
    reversed_string += string_to_reverse[x]
  }
}

// ANSWER
//console.log(reversed_string)

// 2. Please write a function that filters out numbers from a list

const box = ['P', 90, 30,'a',100, 't',200, 'r', 'y', 'c', 'j', 'a',1,2,3,4];

const output = box.filter((item)=> {
  if (typeof item !== "number") {
    return item
  }
})

// ANSWER
//console.log(output)

// 3. Please write a function that shows the usage of closures

const variable = 1;

function hello (value) {
  console.log(value)
}

function world () {
  const variable = 2;
  hello(variable);
}

// ANSWER
//hello(variable);
//world();

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const array_to_flatten = [[2, [4, [44,5,6]]],[4,5,6], [[2,4], 4], 5]
let flatten_array = [];

function flattenArray(arrayToFlatten) {
  arrayToFlatten.forEach((item, index, source) => {
    if(Array.isArray(item) && item != undefined ) {
      console.log(item)
      flattenArray(item)
    } else {
      flatten_array.push(item)
    }
  })
}

//ANSWER
//flattenArray(array_to_flatten)
//console.log(flatten_array)

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const input_3 = ['b', 3, 4, 76, 'c'];
const input_4 = ['a', 'b', 4, 76, 21, 'e'];
const merged_tables = input_3.concat(input_4);
let duplicates = [];

merged_tables.forEach((item_base, index_base, array_base) => {
  merged_tables.forEach((item_duplicate, index_duplicate, array_duplicate) => {
    if (item_base === item_duplicate && index_base !== index_duplicate && duplicates.indexOf(item_duplicate) == -1) {
      duplicates.push(item_duplicate)
    }
  })
})

// ANSWER
//console.log(duplicates)

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const input_1 = ['b', 3, 4, 76, 'c'];
const input_2 = ['a', 'b', 4, 76, 21, 'e'];
const merged_data = input_1.concat(input_2);
let uniques = [];

merged_data.forEach((item_base) => {
  let counter_of_occurences = 0;
  merged_data.forEach((item_duplicate) => {
    if (item_base === item_duplicate) {
      counter_of_occurences ++
    }
  })
  if (counter_of_occurences === 1) {
    uniques.push(item_base)
  }
})

// ANSWER 
//console.log(uniques)


// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const to_tuple = { color: 'Blue', id: '22', size: 'xl' };

const createTuple = (object) => {
  let tuple = [];
  for (const key in to_tuple) {
    tuple.push([key, to_tuple[key]]);
  }
  return tuple
}

//ANSWER
//console.log(createTuple(to_tuple))


// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

const tuple_to_object = [['color', 'blue'], ['id', '22'], ['size', 'xl']];
let object_from_tuple = {};

tuple_to_object.forEach(([prop,key])=> {
  return  object_from_tuple[prop] = key
})
// ANSWER
//console.log(object_from_tuple)



// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const first_array = [1,2,3];
const second_array = [4,5,6,7];

const createPairs = (first, second) => {
  let pairs = [];
  first.forEach((first_item, first_index, first_array) => {
    second.forEach((second_item, second_index, second_array) => {
      if (first_index === second_index) {
        pairs.push([first_item, second_item])
      }
    })
  }) 
  return pairs
}


// ANSWER
//console.log(createPairs(first_array, second_array))



// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'


const array_of_paths = ['a', 'b', 'c', 'd' ];
const object_of_paths =  { a: { b: { c: { d: '23' } } } }
// negative path const object_of_paths =  { a: { b: { c: { d: { e: '23'} } } } };
let answ = '';
function generateValuesFromPaths(object_of_paths,array_of_paths) {
  Object.keys(object_of_paths).forEach((key, index)=>{
    if (object_of_paths[key] !== null && typeof object_of_paths[key] === 'object') {
      generateValuesFromPaths(object_of_paths[key], array_of_paths);
    }
    if (typeof object_of_paths[key] !== 'object' && object_of_paths[key] !== null) {
      if (array_of_paths.indexOf(key) != -1 ) {
        console.log(`Found element: ${object_of_paths[key]}`)
        answ += `${object_of_paths[key]} `
      } else {
        console.log(`Element at path doesn't exist: ${key}`)
        answ = undefined
      }
    }
  })
}

//ANSWER
//generateValuesFromPaths(object_of_paths,array_of_paths)
//console.log(answ)


// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const f_object = { a: 'b', c: 'd' };
const s_object = { c: 'd', a: 'b' };

//const f_object = { a: 'c', c: 'a' }; //negative path
//const s_object = { c: 'd', a: 'b', q: 's' }; //negative path

const isEqual = (f_obj, s_obj) => {
  let answer = true;
  const first_object = f_obj;
  const second_object = s_obj;


  const createArray = (object) => {
    let arr = [];
    for (const key in object) {
      arr.push([key, object[key]]);
    }
    return arr
  }

  let first_array = createArray(first_object)
  let second_array = createArray(second_object)

  const sortedObj = (arr) => {
    return arr.sort((a,b) => {
      var textA = a.toString().toUpperCase();
      var textB = b.toString().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })

  }

  let sorted_first_array = sortedObj(first_array)
  let sorted_second_array = sortedObj(second_array)

  const array_to_object = (arr) => {
    let obj = {};
    arr.forEach(([prop,key])=> {
      return  obj[prop] = key
    })
    return obj
  } 

  const sorted_first_object = array_to_object(sorted_first_array)
  const sorted_second_object = array_to_object(sorted_second_array)

  for (const key in sorted_first_object) {
    for (const key_2 in sorted_second_object) {
      if (key === key_2 && sorted_first_object[key] === sorted_second_object[key_2]) {
        answer = true;
      } else {
        answer = false;
      }
    }
  }
  return answer
} 

//console.log(isEqual(f_object, s_object))


// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const keys = ['color', 'size'];
const object_values = { color: 'Blue', id: '22', size: 'xl' }

const getValuesFromKeys = (keys, object) => {
  let singleValue = {}
  keys.forEach((key) => {
    if (key in object) {
      singleValue[key] = object[key]           
    }
  })
  return singleValue
} 

// ANSWER
//console.log(getValuesFromKeys(keys, object_values) )          