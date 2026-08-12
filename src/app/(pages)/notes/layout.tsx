import { ReactNode } from 'react';
import LocalPagesLayout from '@/components/LocalPagesLayout';

export default function NotesLayout({ children }: { children: ReactNode }) {
  return <LocalPagesLayout slug="notes">{children}</LocalPagesLayout>;
}
