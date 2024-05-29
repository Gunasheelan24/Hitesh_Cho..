const div = document.getElementsByClassName("heart");
console.log(div[0]);

const GetArray = () => {
  console.log("Get Array Is Running");
  let count = 0;
  while (true) {
    if (count === 5) return true;
    console.log(count);
    count++;
  }
};

GetArray();
