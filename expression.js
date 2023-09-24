function expression(num1, num2, num3) {
  // write your code here

  let one = num1 + num2 * num3;
  let two = num1 * (num2 + num3);
  let three = num1 * num2 * num3;
  let four = (num1 + num2) * num3;

  if (one > two && one > three && one > four) {
    return one;
  } else if (two > one && two > three && two > four) {
    return two;
  } else if (three > one && three > two && three > four) {
    return three;
  } else {
    return four;
  } // alhamdulillah
}
