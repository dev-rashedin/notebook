import { extractHeadingsFromMdx, readMdxSource } from './mdx';
import { getContentLinks } from './getLinks';
import getContent from './getContent';


export const todayStamp = () => {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export { readMdxSource, extractHeadingsFromMdx, getContentLinks, getContent };
