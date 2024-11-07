"use client";

import MCVersion from '@/componetns/ui/minecraft-version-badge';
import content from '@/config/site-config.json';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion'
import { AppPrimaryButton } from '@/componetns/ui/app-button';

export default function Page() {
  const params = useParams();
  const slug = params.slug;
  const item = content.contents.find((item) => item.slug === slug);

  return (
    <div>
      <motion.li
        key={item?.url}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-accent text-accent-foreground p-2 rounded"
      >
        {
          item ? (
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">{item?.slug}</h2>
              <div className="flex justify-between items-center">
                <span>{item?.description}</span>
                <MCVersion versions={item?.versions} icon={item?.icon} />
              </div>
              <AppPrimaryButton>
                <Link href={item?.link} className="text-accent-foreground" target="_blank">
                  Download
                </Link>
              </AppPrimaryButton>
            </div>
          )
            : (
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">404</h2>
                <span>Mod not found</span>
              </div>
            )
        }
      </motion.li>
    </div>
  );
}