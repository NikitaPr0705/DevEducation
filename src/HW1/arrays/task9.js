let arr = [4,7,8,2,5,0,3,9];

function selectSort(arr) {
    for (let i = 0, length = arr.length, lastIndex = length - 1; i < lastIndex; i++) {
        let indexMin = i;
        for (let nextIndex = i + 1; nextIndex < length; nextIndex++) {
            if (arr[indexMin] > arr[nextIndex]) {
                indexMin = nextIndex;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}

selectSort(arr);
console.log(arr)

function sortBubble(arr) {
    for(let i = 0, length = arr.length - 1; i < length; i++) {
        for(let j = 0; lastIndex = lenght - i; j < lastIndex; j++) {
            if(arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

sortBubble(arr);
console.log(arr)


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElem = arr[i];
      let previousIndex = 0;
      for (previousIndex = i - 1; previousIndex >= 0 && arr[previousIndex] > currentElem; previousIndex--) {
        arr[previousIndex + 1] = arr[previousIndex];
      }
      arr[previousIndex + 1] = currentElem;
    }
   return arr;
  }

  insertionSort(arr);
  console.log(arr)