/*

Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

The image you get is known to have potentially many distinct rectangles of 0s on a background of 1's. Write a function that takes in the image and returns the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

image1 = [
  [0, 1, 1, 1, 1, 1, 1], // [0,0]
  [1, 1, 1, 1, 1, 1, 1], // []
  [0, 1, 1, 0, 0, 0, 1], // [0,0], [3, 2] ,[4, 2], [5, 2] 
  [1, 0, 1, 0, 0, 0, 1], // [1,3], [3, 3], [4, 3], [5, 3]
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
]

Sample output variations (only one is necessary):

findBoxes(image1) =>
  // (using top-left-row-column and bottom-right):
  [
    [[0,0],[0,0]],
    [[2,0],[2,0]],
    [[2,3],[3,5]],
    [[3,1],[5,1]],
    [[5,3],[6,4]],
    [[7,6],[7,6]],
  ]
  // (using top-left-row-column and width/height):
  [
    [[0,0],[1,1]],
    [[2,0],[1,1]],
    [[2,3],[3,2]],
    [[3,1],[1,3]],
    [[5,3],[2,2]],
    [[7,6],[1,1]],
  ]

Other test cases:

image2 = [
  [0],
]

findBoxes(image2) =>
  // (using top-left-row-column and bottom-right):
  [
    [[0,0],[0,0]],
  ]

  // (using top-left-row-column and width/height):
  [
    [[0,0],[1,1]],
  ]

image3 = [
  [1],
]

findBoxes(image3) => []

image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]

findBoxes(image4) =>
  // (using top-left-row-column, and bottom-right or width/height):
  [
    [[1,1],[3,3]],
  ]

n: number of rows in the input image
m: number of columns in the input image



*/

"use strict";

const image1 = [
  [0, 1, 1, 1, 1, 1, 1], // [0,0]...[0,0]
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1], // [2,0]...[2,0] - [2,3]...[2,5]
  [1, 0, 1, 0, 0, 0, 1], // [3,1]...[3,1] - [3,3]...[3,5]
  [1, 0, 1, 1, 1, 1, 1], // [4,1]...[4,1] 
  [1, 0, 1, 0, 0, 1, 1], // [5,1]...[5,1] - [5,4]...[5,4]
  [1, 1, 1, 0, 0, 1, 1], // [6,3]...[6,4] 
  [1, 1, 1, 1, 1, 1, 0], // [7,6]
];

const image2 = [
  [0],
];

const image3 = [
  [1],
];

const image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1], // [2,2]...[2,4] => [x, 4]
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1], // [3,2]...[3,4] => []
  [1, 1, 1, 1, 1],
];

// Helper function display multidimentional array
function toString(input, level) {
  // input is not an array, therefore just return the input itself
  if (!Array.isArray(input)) {
      return input + ",";
  } else {
      if (Array.isArray(input) && level < 2) {
          // first two levels of arrays should be broken down
          let text = "";
          input.forEach(part => text += toString(part, level+1));
          text += "\n";
          return text;
      } else {
              // third level of arrays should just be printed, but without quotes
              let text = JSON.stringify(input);
              while (text.indexOf("\"") > -1) {
                  text = text.replace("\"", "");
              }
              return text;
      }
  }
}

function findBoxes(image) {
  
    let result = [];
    let rows = image.length;
    let columns = image[0].length;
    let dp = Array(rows).fill().map(() => Array(columns).fill(0));

    function findBox(rows, columns, top, left){
      let bottom = top;
      let right = left;
      for( bottom=top; bottom<rows; bottom++ ){
        if( image[bottom][left] != 0 ){
          break;
        } 
        for( right=left; right<columns; right++ ){
          dp[bottom][right] = 1;
          if( image[bottom][right] != 0 ){
            break;
          }
        }
      }
      return [[top, left], [bottom-1, right-1]];
    }

    for(let row=0; row<rows; row++){
      for(let col=0; col<columns; col++){

        if(image[row][col] == 0 && dp[row][col] == 0){
          let box = findBox(rows, columns, row, col);
          result.push(box);
        }

      }
    }
  
    return result;
}

let results = findBoxes(image1);
for(const result of results){
  console.log( `${result[0].toString()} - ${result[1].toString()}` );
}