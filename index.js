function countElem() {
   const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

   let even = 0,
       odd = 0,
       zero = 0;

   for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
         if (arr[i] === 0) {
            zero += 1;
         } else if (arr[i] % 2 === 0) {
            even += 1;
         } else {
            odd += 1;
         }
      }
   }

   console.log('четных элементов: ', even)
   console.log('нечетных элементов: ', odd)
   console.log('нулей: ', zero)
}

countElem()





function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? 'Число ${num} - простое число' : 'Число ${num} - составное число';
    } else if (num > 1000) {
        result = 'Данные неверны';
    }
    return result;
}



function getSum(a) {
    return function(b) {
        return a + b
    }
};

const sum1 = getSum(2);

const sum2 = sum1(3)

console.log(sum2);


function numbers(a, b) {
    let current = a;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == b) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

numbers(5, 15);



const pow = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

const result = pow(5, 3)
console.log(result)