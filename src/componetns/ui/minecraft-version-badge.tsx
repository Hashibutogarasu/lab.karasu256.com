import Image from 'next/image'
import React from 'react'

interface MinecraftVersionBadgeProps {
  icon: string
  versions: string | string[] | undefined
  className?: string
}

export default function MCVersion({ versions, className = "", icon }: MinecraftVersionBadgeProps) {
  const versionArray = Array.isArray(versions) ? versions : [versions]

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors ${className}`}>
      {
        icon ?
          <Image width={32} height={32} src={`${icon}`} alt="Minecraft Version Icon" />
          : null
      }
      {versionArray.length === 1 ? (
        versionArray[0]
      ) : (
        <span>
          {versionArray[0]} - {versionArray[versionArray.length - 1]}
        </span>
      )}
    </div>
  )
}