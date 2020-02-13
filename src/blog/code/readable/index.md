---
title: The importance of readable data structures
date: 2020-01-26
layout: Post
categories:
  - Software
tags:
  - Python
  - Object
  - Naming
  - Clarity
---

A friend asked for help on Facebook the other day with a programming problem. He needed to dynamically create a set of buttons, and was having problems looping through his variables that stored the data used to create his buttons, to create each button dynamically.

<!-- more -->

## The Code

The code in question is written in [Python](https://www.python.org/) and uses [tkinter](https://wiki.python.org/moin/TkInter) to create a GUI consisting of 2 rows of buttons. The data for each button is held in a set of variables. Here are a few of the variables that had been defined:

```python
two = ["2:",2]
three = ["3:",3]
four = ["4:",4]
five = ["5:",5,[2,3]]
twentyseven = ["27:",[2,4,6,7,8],[3,4,5,7,8],[2,3,4,5,6,7]]
twentyeight = ["28:",[2,5,6,7,8],[3,4,6,7,8],[2,3,4,5,6,8]]
twentynine = ["29:",[3,5,6,7,8],[2,3,4,5,7,8]]
```

The code to create a button looked like this:

```python
b4 = tk.Button(root, text='4', width=4, padx=10, pady=10, command=lambda:print(four))
b4.grid(column=2, row=1)
```

## Issues

My first task was to fix the structure of the data. Separate variables (`two`, `three`, etc) are pretty hard to iterate over. The data structure for each variable stores data in an array, and relies on the programmer knowing what is stored in each array element. This is also bad because if we want to add more data to this array, we will break any existing code that references this data. For example, if we wanted to insert the integer value of our number into this array at the beginning of the array, `twentynine = ["29:",[3,5,6,7,8],[2,3,4,5,7,8]]` would become `twentynine = [29, "29:",[3,5,6,7,8],[2,3,4,5,7,8]]`. Now, any code that previously accessed the string value `"29:"` using the array reference `twentynine[0]` would have to be changed to `twentynine[1]`. Having to fix code like this is far from ideal, and will only get worse as the data structure becomes more complex. Trust me - I've been there, and done that! It's not fun.

For this particular data structure, the variable names that have been used are a text representation of the number each array pertains to. The first element of the array is a string of the number's numerical value, with a colon appended. Obviously this can be created from the numeric value, so it makes much more sense to just store the integer and cast it to a string, appending a colon, where needed. Next up we have a varying number of array elements each consisting of one or more integers. But here we have a problem - inconsistency. If there's a single integer, the data is stored as an integer, but if there's more than one integer, the data is stored as an array of integers.

This inconsistency in how the integers are stored will mean that, when these values are used in code, there's going to have to be a conditional statement to handle the special case of a single integer. If our code expects an array, it's going to break whenever it hits an integer value rather than an array of integers. It would make much more sense to save a single integer as an array holding the integer - that way our code will only ever have to handle an array, and can iterate over that array whether it contains one integer or six. While we're at it, it would also make sense to store this set of arrays in another array. That way we won't have to perform a slice on the parent array to get our sets of integers.

Finally, once we've applied consistency to the data, we should also apply some naming clarity. I asked a few questions about what the data was being used for, and came up an object structure for each set of values. On top of this, the set of objects needs to be saved in an array, as this will allow us to iterate over it for our dynamic button code.

## My Solution

Here's the resulting data structure, once I've applied my improvements:

```python
numbers = [
	{"value": 2, "name": "two", "digits": [[2]]},
	{"value": 3, "name": "three", "digits": [[3]]},
	{"value": 4, "name": "four", "digits": [[4]]},
	{"value": 5, "name": "five", "digits": [[5], [2, 3]]},
	{"value": 27, "name": "twentyseven", "digits": [[2, 4, 6, 7, 8], [3, 4, 5, 7, 8], [2, 3, 4, 5, 6, 7]]},
	{"value": 28, "name": "twentyeight", "digits": [[2, 5, 6, 7, 8], [3, 4, 6, 7, 8], [2, 3, 4, 5, 6, 8]]},
	{"value": 29, "name": "twentynine", "digits": [[3, 5, 6, 7, 8], [2, 3, 4, 5, 7, 8]]}
]
```

The data we're holding is the numerical value of each number, its string name and an array of arrays of unique digits between 2 and 8 that will total the value. The object used to hold each set of values has a set of clearly named keys holding our data.

Now, if this was JavaScript we could be clever and use dot notation to reference these values, like:

```javascript
for (const number of numbers) console.log(number.value, number.name);
```

In the above code, both `number.value` and `number.name` use the dot notation to access the `number` object's data.

Unfortunately in Python (because this isn't an object) we have to use square brackets to access our data, e.g. `number['value]` and `number['name']` - but at least this is still easy to read, and it's still pretty obvious what the data we're referring to is.

For this challenge, once I had applied my own advice and munged the data into a sensible structure, the code to dynamically create buttons was pretty easy to write:

```python
offset = 2
columns = 2
for number in self.numbers:
	button = tk.Button(root, text = str(number['value']), width = 4, padx = 10, pady = 10, command = lambda number = number: print(number['name']))
	button.grid(row = (number['value'] - offset) // columns, column = (number['value'] - offset) % columns)
```

I used the mathematical quotient (`//`) and modulus (`%`) to work out which row and column the button should sit on in the parent grid, and added an `offset` variable so that I could start the grid row at 0, even though the object numerical values started at 2. Being a smart ass, I also included a `columns` variable to allow for any number of columns to be specified.

I coded this blind, but of course people nearly always make mistakes when they code - and I'm no exception! I figured out how `tkinter` worked, so that I could get a fully working example up and running and iron out my mistakes. For the final code I also saved a pointer to each button in the source data array (at `number['button']`), so that the button can be referenced easily if needed. Here's the final tested script that, if you're using a [recent version of Python](https://www.python.org/downloads/release/python-381/) with `tkinter` bundled, should work out of the box:

<<< ./src/blog/code/readable/buttons.py

## Lessons

I guess the point of this post is that making code that is readable is important. I've been guilty in the past of using too short variable names, arrays instead of objects and run-on lines of code to save a few bytes, but - especially in this day and age, when storage is cheap - there's really no need to be saving a minuscule amount of space. It's much better to aim for clarity. Name your variables so that it's obvious to others - and to you, when you come back to your code after 6 months of doing other things - what data the variable holds. Similarly, use objects (dicts in Python) rather than arrays to hold heterogeneous data (data that's not all of the same type/use), and pick sensible key names for your object. You'll thank yourself for doing this. Given that you're using a data object, don't be scared to use sub-objects.

Now, obviously it doesn't always make sense to be verbose with your data. Sometimes there's limited bandwidth, or the bandwidth cost is high, and making a leaner, smaller data structure makes sense - in IoT devices, for example. However, even for these applications, on the server side where you're processing the incoming data it makes sense to write a converter function that expands your cryptic data out to a readable form.

### Examples

#### Variables

Instead of:

```python
c = 2
os = 2
```

use:

```python
buttonColumns = 2
buttonOffset = 2
```

#### Objects

Instead of:

```python
[27, "twentyseven", "odd", [[2, 4, 6, 7, 8], [3, 4, 5, 7, 8], [2, 3, 4, 5, 6, 7]]]
```

use:

```python
{
	"value": 27,
	"details": {
		"name": "twentyseven",
		"oddoreven": "odd"
	},
	"digits": [
		[2, 4, 6, 7, 8],
		[3, 4, 5, 7, 8],
		[2, 3, 4, 5, 6, 7]
	]
}
```

### Summary

- Pick verbose variable names
- Use objects/dicts to store data
  - Use verbose names for your object keys
  - Use child objects inside your main data object - make a sensible hierarchy
