// ミリ秒で指定
const sleep = (waitTime) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

var words = "HelloWorld!".repeat(9);
const main = async function () {
  while (true) {
    for (const elem of words) {
      document.write(elem.fontsize(6)); // どうやら非推奨らしい
      await sleep(25);
    }

    document.write("</br>".fontsize(6));
  }
};
main();
