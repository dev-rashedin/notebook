import { ReactNode } from 'react';
import LocalPagesLayout from '@/components/LocalPagesLayout';

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (<LocalPagesLayout slug="case-studies">{children}</LocalPagesLayout>
  );
}
