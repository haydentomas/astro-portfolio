// utils/image.js

import { getURL } from "astro:assets";

export function getFormattedImageURL(image, format) {
  if (!image) {
    return "";
  }
  const url = new URL(getURL(image));
  url.searchParams.set("format", format);
  return url.toString();
}
