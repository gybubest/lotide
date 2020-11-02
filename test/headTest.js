const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([]), undefined)
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");