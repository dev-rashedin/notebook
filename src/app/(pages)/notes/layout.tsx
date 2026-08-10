import { ReactNode } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import { getContentLinks } from '@/lib';
import MotionWrapper from '@/components/MotionWrapper';
import DrawerContainer from '@/components/DrawerContainer';
import { getNestedLinks } from '@/lib/getLinks';
import LocalPagesLayout from '@/components/LocalPagesLayout';

export default function NotesLayout({ children }: { children: ReactNode }) {
  return <LocalPagesLayout slug="notes">{children}</LocalPagesLayout>;
}
