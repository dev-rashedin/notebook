import { ReactNode } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import { getContentLinks } from '@/lib';
import MotionWrapper from '@/components/MotionWrapper';
import DrawerContainer from '@/components/DrawerContainer';
import { getNestedLinks } from '@/lib/getLinks';
import PagesLayout from '../layout';

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (<PagesLayout slug="case-studies">{children}</PagesLayout>
  );
}
