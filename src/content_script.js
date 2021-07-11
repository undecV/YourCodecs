/**
 * The codes modify from [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify), released under MIT Licence.
 */

/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 erkserkserks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// This content script runs in an isolated environment and cannot modify any
// javascript variables on the youtube page. Thus, we have to inject another
// script into the DOM.

// Set defaults for options stored in localStorage
if (localStorage['yourcodecs-enable'] === undefined) {
  localStorage['yourcodecs-enable'] = true;
}
if (localStorage['yourcodecs-block_60fps'] === undefined) {
  localStorage['yourcodecs-block_60fps'] = false;
}
if (localStorage['yourcodecs-block_vp8'] === undefined) {
  localStorage['yourcodecs-block_vp8'] = false;
}
if (localStorage['yourcodecs-block_vp9'] === undefined) {
  localStorage['yourcodecs-block_vp9'] = false;
}
if (localStorage['yourcodecs-block_av1'] === undefined) {
  localStorage['yourcodecs-block_av1'] = false;
}

// Cache chrome.storage.local options in localStorage.
// This is needed because chrome.storage.local.get() is async and we want to
// load the injection script immediately.
// See https://bugs.chromium.org/p/chromium/issues/detail?id=54257
browser.storage.local.get({
  // Set defaults
  enable: true,
  block_60fps: false,
  block_vp8: false,
  block_vp9: false,
  block_av1: false,
}, function (options) {
  localStorage['yourcodecs-enable'] = options.enable;
  localStorage['yourcodecs-block_60fps'] = options.block_60fps;
  localStorage['yourcodecs-block_vp8'] = options.block_vp8;
  localStorage['yourcodecs-block_vp9'] = options.block_vp9;
  localStorage['yourcodecs-block_av1'] = options.block_av1;
}
);

var injectScript = document.createElement('script');
// Use textContent instead of src to run inject() synchronously
injectScript.textContent = inject.toString() + "inject();";
injectScript.onload = function () {
  // Remove <script> node after injectScript runs.
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(injectScript);
