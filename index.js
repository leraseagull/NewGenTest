// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// фильтр диапазона

function rangeFilter(arr, x, y) {
    if (x === null && y === null) {
        return arr;
    } else if (x === null) {
        return arr[0] <= y;
    } else if (y === null) {
        return x <= arr[1] || arr[1] === null;
    } else {
        return (x < arr[1] || arr[1] === null) && (arr[0] <= y || arr[0] === null);
    }

}

// проверка
console.log(rangeFilter(courses, null, 200));

//функция сортировки

function sortArr(arr) {
    arr.sort((x, y) => x.prices[0] > y.prices[0] ? 1 : -1);
}