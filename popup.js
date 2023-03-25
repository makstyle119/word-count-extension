let selectedText = '';
const countDiv = document.getElementById('count');
const errorDiv = document.getElementById('error');

chrome.tabs.executeScript(
  {
    code: 'window.getSelection().toString();',
  },
  function (selection) {
    if (selection && selection[0]) {
      selectedText = selection[0].trim();
      const wordCount = selectedText.split(/\s+/).length;
      const charCount = selectedText.length;
      countDiv.textContent = `Word count: ${wordCount} & character count ${charCount}`;
    } else {
      errorDiv.textContent =
        'Please select some text on the page to get a word count.';
    }
  }
);
