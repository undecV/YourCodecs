# ![icon](./icons/icon32.png) YourCodecs

[正體中文](./README.zh_TW.md)

Select video codecs for YouTube. Force to play YouTube videos with H.264 (AVC), VP9, AV1 codec.

![Install](https://addons.mozilla.org/firefox/addon/your-codecs/)

## Features

- Optional select the codecs which want to block, VP8, VP9, and AV1 (If you choose that all, YouTube may send you H.264 (AVC));
- Optional block 60 FPS.
- Dark UI;
- Language support: English, Chinese (Taiwan).

## Why YourCodecs?

YouTube always uses the most advanced technology in the world. From AVC to VP8, VP9, and then AV1, the new video compressing codec brings higher performance and compresses quality. Still, if you play a video with a codec that the hardware (GPU) didn't support, it will decode by software which causes high CPU usage and may cause some ("OLD") devices to be hot, slow and reduce the battery life. Usually, YouTube will automatically help you choose the codec automatically, but it may not always as you wish.

## Which Codec did I get?

Right-click the youtube player, select "Stats for nerds". You will see "Codecs" for both video and audio. VP9, AV1 may be marks start with VP09, AV01.

## Does My Hardware Support The New Codecs?

There are many ways to confirm that. You can Google the spec of your lovely device. Or, check the "Task manager". If your hardware supports the codec, the "Video Encode engine" graph should increase when youtube plays the video.

## License

The codes modify (fork) from [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify), released under MIT Licence.

And the modified version is still released under MIT Licence.

## Reference

- GitHub - [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify): Original Repo.
- GitHub - [Shimmermare/NotYetAV1](https://github.com/Shimmermare/NotYetAV1): Another fork of h264ify, which only blocks AV1.
- GreasyFork - [burlaka/Youtube H.264 (updated 2020)](https://greasyfork.org/zh-TW/scripts/415692-youtube-h-264-updated-2020): A UserScript that only selects H.264 (AVC).

## Remarks

- UserScript Version does not work with GreaseMonkey, but ViolentMonkey does work.
- I can't test the VP8 option because I can't find any video that still uses VP8, but it should work.
