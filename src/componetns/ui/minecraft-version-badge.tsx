import React from 'react'
import style from '@/componetns/styles/minecraft-version-badge.module.css'

interface MinecraftVersionBadgeProps {
  versions: string | string[] | undefined
  className?: string
}

export default function MCVersion({ versions, className = "" }: MinecraftVersionBadgeProps) {
  const versionArray = Array.isArray(versions) ? versions : [versions]

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors ${className}`}>
      <div className={style.versionBadge}>
        {versionArray.length === 1 ? (
          versionArray[0]
        ) : (
          <div>
            {versionArray[0]} - {versionArray[versionArray.length - 1]}
          </div>
        )}
      </div>
    </div>
  )
}