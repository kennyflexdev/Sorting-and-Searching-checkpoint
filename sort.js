//Each time work only with the first i-1 element from of the array
//Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

for i in range(1, len(arr)):
        key = arr[i]
        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        j = i-1
        while j>=0  key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key ;

// array to be sorted
arr = [12, 11, 13, 5, 6]
//call the insertion sort
insertionSort(arr)
// prints sorted array i.e. 5 6 11 12 13
for i in range(len(arr));
    print(arr[i],end = ' ')