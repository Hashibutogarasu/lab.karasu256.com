"use client";

import { motion } from 'framer-motion'
import config from '@/config/site-config.json'
import Link from 'next/link'

export const AnimatedListCard = () => {
  const items = config.contents.map((content) => content.slug)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8"
    >
      <h2 className="text-xl font-semibold mb-4">Mod List</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-accent text-accent-foreground p-2 rounded"
          >
            <Link href={`/mods/${item}`}>
              <div className="flex justify-between items-center">
                <span>{item}</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-accent-foreground"
                >
                  →
                </motion.span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}