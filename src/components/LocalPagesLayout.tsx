import { ReactNode } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import  {getContentLinks}  from '@/lib/getLinks';
import MotionWrapper from '@/components/MotionWrapper';
import DrawerContainer from '@/components/DrawerContainer';
import { getNestedLinks } from '@/lib/getLinks';

export default function LocalPagesLayout({ children, slug }: { children: ReactNode, slug: string }) {
  const links = getContentLinks(slug);
  
  
  const nestedLinks = getNestedLinks(slug);

  return (
    <main className="lg:flex">
      <div className="sidebar">
        <LeftSidebar links={links} type={slug} nestedLinks={nestedLinks} />
      </div>

      {/* content area */}
      <div className="docs-content relative">
        <DrawerContainer links={links} type={slug} nestedLinks={nestedLinks}>
          <MotionWrapper type="docs">{children}</MotionWrapper>
        </DrawerContainer>
      </div>
    </main>
  );
}
