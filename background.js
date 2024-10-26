/**
 * 与えられたテキストがスラッシュ区切りの文字列かどうかを判定する
 * @param {string} text
 */
const isSlashSeparatedText = (text) => {
  return text.split("/").length === 2;
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "slashLink",
    title: "Open GitHub link",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const selectedText = info.selectionText;
  if (!isSlashSeparatedText(selectedText)) {
    return;
  }
  const url = `https://github.com/${selectedText}`;
  chrome.tabs.create({ url });
});
