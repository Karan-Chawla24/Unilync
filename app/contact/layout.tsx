import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Unilync Soft-tech - Get in Touch',
  description: 'Contact Unilync Soft-tech for inquiries about our IT, Consulting, and Financial services. We are here to help your business.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
} 