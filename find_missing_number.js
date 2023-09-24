function find_missing_number(n, numbers) {
    // write your code here
  
    numbers.sort((a, b) => a - b);
    let numbers2 = [];
  
    for (let i = 1; i <= n; i++) {
      numbers2.push(i);
    }
  
    // numbers = list1
    // numbers2 = list2
  
    for (let i = 0; i < numbers2.length; i++) {
      if (!numbers.includes(numbers2[i])) {
        return numbers2[i];
      }
    } // alhamdulillah
  }