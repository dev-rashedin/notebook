import Link from 'next/link';
import DisplayHeadings from './DisplayHeadings';
import Divider from './ui/CustomDivider';
import RightSidebarPortal from './RightSidebarPortal';
import { getContent } from '@/lib';
import { FiEdit } from 'react-icons/fi';

interface Props {
  endpoint: string;
  slug: string;
}

const DisplayContent = async ({ endpoint, slug }: Props) => {
  const { content, headings, currentSlug, prevSlug, nextSlug, prevHref, nextHref } =
    await getContent(endpoint, slug);

  const isIndex = slug === 'index';

  return (
    <div className="h-full">
      <article className="prose prose-lg min-h-fit">{content}</article>

      <DisplayHeadings clientHeadings={headings} />
      <RightSidebarPortal clientHeadings={headings} />

      {/* Previous / Next navigation */}

      <section className="max-w-3xl pt-40 pb-60">

        <Divider />

        {/* next and previous button */}
        <div className="flex justify-between">
          {prevSlug && !prevSlug.startsWith('_') ? (
            <Link href={prevHref!} className="next-previous-btn">
              <span className="text-sm text-muted-highlight">Previous Page</span>
              <span className="text-brand">
                {prevSlug === 'index'
                  ? 'Overview'
                  : prevSlug.includes('express') || prevSlug.includes('fastify')
                    ? prevSlug
                    : prevSlug
                        .split('-')
                        .map((word) =>
                          word.toLowerCase() === 'cli'
                            ? 'CLI'
                            : word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(' ')}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextSlug && !nextSlug.startsWith('_') ? (
            <Link href={nextHref!} className="next-previous-btn items-end">
              {' '}
              <span className="text-sm text-muted-highlight">Next Page</span>
              <span className="text-brand">
                {nextSlug.includes('express') || nextSlug.includes('fastify')
                  ? nextSlug
                  : nextSlug
                      .split('-')
                      .map((word) =>
                        word.toLowerCase() === 'cli'
                          ? 'CLI'
                          : word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(' ')}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
};

export default DisplayContent;
