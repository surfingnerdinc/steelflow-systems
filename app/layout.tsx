import { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

// Root layout - tylko wrapper bez html/body
export default function RootLayout({ children }: Props) {
  return children;
}
