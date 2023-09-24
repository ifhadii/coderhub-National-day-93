function sum_numbers(num, s) {
    // write your code here
  
    // 5 => 5, 4, 3, 2, 1 = [2, 4] = 6
  
    let od = [];
    let ev = [];
  
    // odd operation
    if (s == "فردي") {
      for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
          od.push(i);
        }
      }
    } else {
      // even operation
      if (s == "زوجي") {
        for (let i = 1; i <= num; i++) {
          if (i % 2 === 0) {
            ev.push(i);
          }
        }
      }
    }
  
    // od sum
    if (s == "فردي") {
      let sumOdd = 0;
      for (let i = 0; i < od.length; i++) {
        sumOdd += od[i];
      }
      return sumOdd;
    } else {
      // ev sum
      if (s == "زوجي") {
        let sumEven = 0;
        for (let i = 0; i < ev.length; i++) {
          sumEven += ev[i];
        }
        return sumEven;
      }
    } // alhamdulillah
  }
  
  console.log(sum_numbers(7, "فردي"));
  