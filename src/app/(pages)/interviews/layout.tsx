import { ReactNode } from 'react';
import LocalPagesLayout from '@/components/LocalPagesLayout';

export default function InterviewsLayout({ children }: { children: ReactNode }) {
  return <LocalPagesLayout slug="interviews">{children}</LocalPagesLayout>;
}
