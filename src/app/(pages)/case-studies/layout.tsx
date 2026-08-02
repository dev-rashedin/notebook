import { ReactNode } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import { getContentLinks } from '@/lib';
import MotionWrapper from '@/components/MotionWrapper';
import DrawerContainer from '@/components/DrawerContainer';
import { getNestedLinks } from '@/lib/getLinks';

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  const links = getContentLinks('case-studies');

  console.log('links', links);
  
  
  const nestedLinks = getNestedLinks('case-studies');

  return (
    <main className="lg:flex">
      <div className="sidebar">
        <LeftSidebar links={links} type="case-studies" nestedLinks={nestedLinks} />
      </div>

      {/* content area */}
      <div className="docs-content relative">
        <DrawerContainer links={links} type="case-studies" nestedLinks={nestedLinks}>
          <MotionWrapper>{children}</MotionWrapper>
        </DrawerContainer>
      </div>
    </main>
  );
}
