# YourCodecs 你的編碼

<del>在茫茫影片中，尋找從未支援的編碼。</del>

[English](./README.md)

選擇 YouTube 的影片編碼。強制 YouTube 使用 H.264 (AVC), VP9, AV1 視訊編碼。

## 功能

- 可選擇不允許的編碼 VP8, VP9, and AV1（如果全打開，YouTube 可能會給你 H.264 (AVC) 的版本）；
- 可選擇不允許 60 FPS；
- 暗黑介面；
- 語言支援：英語、正體中文。

## 為什麼 YourCodecs？

YouTube 總是使用全世界最先進的技術。從 H.264 到 VP8、VP9 再到 AV1，新的視訊編碼帶來了更高的壓縮性能和更好的畫質，然而，當你播放一個你的硬體（顯示卡）不支援的影片的時候，它會使用軟體解碼，這會讓 CPU 使用率升高，並可能導致一些（『老』）設備變熱、變慢、變耗電。通常 YouTube 會幫你自動選擇編碼，但它可能並不總是如您所願。

## 如何查看當前影片的編碼？

右鍵你的 YouTube 播放器，選擇「統計資料」，你會看到「Codecs」欄位記載視訊和音訊編碼，VP9、AV1 可能是以 VP09、AV01 開頭的標記。

## 我的硬體支援新的編碼嗎？

有很多的方法可以確認這一點，你可以 Google 一下你心愛的設備的規格，或者，查看「工作管理員」，如果你的硬體支援這個編碼，在影片播放的時候「Video Encode」引擎圖表會增長。

## 許可

程式碼修改（分叉）自 [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify)，它以 MIT 許可證釋出。

修改過的版本仍然以 MIT 許可證釋出。

## 參考

- GitHub - [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify): 原始版本；
- GitHub - [Shimmermare/NotYetAV1](https://github.com/Shimmermare/NotYetAV1): 另一個 h264ify 的分叉，僅阻擋 AV1；
- GreasyFork - [burlaka/Youtube H.264 (updated 2020)](https://greasyfork.org/zh-TW/scripts/415692-youtube-h-264-updated-2020): 一個 UserScript 僅選擇 H.264(AVC)。

## 註記

- 我沒辦法測試 VP8 因為我找不到還在用 VP8 編碼的影片，但應該能跑：）
- UserScript 版本無法在 GreaseMonkey 上運行，但 ViolentMonkey 可以。
