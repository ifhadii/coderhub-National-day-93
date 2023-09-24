function perfect_Number_check(num) {
    // write your code here
  
    let per = [];
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        per.push(i);
        if (per.includes(num)) {
          per.pop(num);
        }
      }
    }
    let checker = 0;
    for (let i = 0; i < per.length; i++) {
      checker += per[i];
    }
    if (checker == num) {
      return true;
    } else {
      return false;
    }
  }