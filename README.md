# Gif-Converter
[Alpine Gif-Converter](https://gifmaker-nazarami20.vercel.app/) is an entirely browser-based gif-converter, powered by WebAssembly. Unlike other websites for transforming video codecs into GIFs, it does not store any of its user's data within a backend server and all input files are local.

## Why use WebAssembly?
WebAssembly allows for rewriting a browser-compatible port of FFMPEG. This WASM package is run entirely in the user's browser, and allows for complete privacy, as no input files are sent to backend databases.
