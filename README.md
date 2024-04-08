# ![icon](./icons/icon32.png) YourCodecs

[正體中文](./README.zh_TW.md)

Why do some YouTube videos make the browser freeze, the computer heat up, and the cooling fans spin like it's about to take off? It's possible that the video selected a codec that your computer doesn't support.

A Firefox extension can select video codecs for YouTube. Force to play YouTube videos with H.264 (AVC), VP9, AV1 codec.

[![Install](./DOCS/get-the-addon.png)](https://addons.mozilla.org/firefox/addon/your-codecs/)

## Glance

![Screenshot](./docs/Screenshot.png)

## Features

- Optional select the codecs which want to block, AVC, VP8, VP9, and AV1.
- Optional block 60 FPS.
- Dark UI;
- Language support: English, Chinese (Taiwan).

> :warning: If you block all codecs, YouTube will tell you "Your browser can't play this video.", it works as expected.

> To _enforce_ AV1, Options VP9 and AV1 need to be allowed (unchecked). the reason is unknown.

> Sometimes, a _hard reflash_ is required, i.e. `Ctrl + F5`.

## Why YourCodecs?

YouTube consistently leverages cutting-edge technologies. From AVC to VP8, VP9, and now AV1, its latest video compression codec promises enhanced performance and quality compression. However, encountering a video with a codec unsupported by your hardware (GPU) leads to software decoding, significantly taxing CPU resources. This can result in overheating, sluggish performance, and reduced battery life, particularly on "older" devices. While YouTube typically automatically selects the codec for you, it may not always be your wish.

## Which Codec did I get?

Right-click the youtube player, select "Stats for nerds". You will see "Codecs" for both video and audio. VP9, AV1 may be marks start with `VP09`, `AV01`.

## Does My Hardware Support The New Codecs?

Determining whether your hardware supports the latest codecs can be approached in several ways. One method is to search for the specifications of your device online. Alternatively, you can inspect the "Task Manager" while playing a video on YouTube. If your hardware is compatible with the codec being used, you should observe an increase in the "Video Encode engine" graph during playback.

## License

The codes modify (fork) from [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify), released under MIT Licence.

And the modified version is still released under MIT Licence.

## Reference

- GitHub - [erkserkserks/h264ify](https://github.com/erkserkserks/h264ify): Original Repo.
- GitHub - [Shimmermare/NotYetAV1](https://github.com/Shimmermare/NotYetAV1): Another fork of h264ify, which only blocks AV1.
- GreasyFork - [burlaka/Youtube H.264 (updated 2020)](https://greasyfork.org/zh-TW/scripts/415692-youtube-h-264-updated-2020): A UserScript that only selects H.264 (AVC).

## Remarks

- The UserScript Version does not work with GreaseMonkey, but ViolentMonkey does work.
- I can't test the VP8 option because I can't find any video that still uses VP8, but it should work.
