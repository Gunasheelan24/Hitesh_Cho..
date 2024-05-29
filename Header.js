const getHeader = () => {
  console.log("Header Is Running Here");
  let count = 0;
  while (true) {
    if (count === 5) return true;
    console.log(count);
    count++;
  }
};

getHeader();
