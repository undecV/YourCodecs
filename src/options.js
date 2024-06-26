/**
 * The codes modify from [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify), released under MIT Licence.
 */

// Saves options to chrome.storage
function save_options() {
  var enable = document.getElementById('enable').checked;
  var block_60fps = document.getElementById('block_60fps').checked;
  var block_avc = document.getElementById('block_avc').checked;
  var block_vp8 = document.getElementById('block_vp8').checked;
  var block_vp9 = document.getElementById('block_vp9').checked;
  var block_av1 = document.getElementById('block_av1').checked;
  browser.storage.local.set({
    enable: enable,
    block_60fps: block_60fps,
    block_avc: block_avc,
    block_vp8: block_vp8,
    block_vp9: block_vp9,
    block_av1: block_av1,
  });
}

// Restores checkbox state using the options stored in chrome.storage.
function restore_options() {
  // Use default value enable = true and block_60fps = false
  browser.storage.local.get({
    enable: true,
    block_60fps: false,
    block_avc: false,
    block_vp8: false,
    block_vp9: false,
    block_av1: false,
  }, function(options) {
    document.getElementById('enable').checked = options.enable;
    document.getElementById('block_60fps').checked = options.block_60fps;
    document.getElementById('block_avc').checked = options.block_avc;
    document.getElementById('block_vp8').checked = options.block_vp8;
    document.getElementById('block_vp9').checked = options.block_vp9;
    document.getElementById('block_av1').checked = options.block_av1;
  });
}

// Restore saved options when extension is loaded
document.addEventListener('DOMContentLoaded', restore_options);

// Save options when checkboxes are clicked
var checkboxes = document.getElementsByClassName('checkbox');
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', save_options)
}

// l10n
for (let element of document.querySelectorAll('[data-l10n-id]')) {
  element.textContent = browser.i18n.getMessage(element.dataset.l10nId);
}
