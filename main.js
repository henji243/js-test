// ミリ秒で指定
const sleep = (waitTime) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

var words = "HelloWorld!".repeat(15);
const main = async function () {
  while (true) {
    for (const elem of words) {
      document.write(elem.fontsize(7)); // どうやら非推奨らしい
      await sleep(10);
    }

    document.write("</br>".fontsize(7));
  }
};
main();
