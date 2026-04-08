// src/components/ServiceCard.tsx
import { h } from 'react';

type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}