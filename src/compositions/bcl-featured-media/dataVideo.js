module.exports = {
  content: "Media description text goes here.",
  content_classes: "bg-light p-3",
  poster_image:
    "https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg",
  tracks: [
    {
      kind: "captions",
      label: "English",
      src: "example.vtt",
      srclang: "en",
    },
  ],
  sources: [
    {
      type: "video/mp4",
      src: "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4",
    },
    {
      type: "video/webm",
      src: "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm",
    },
  ],
};
