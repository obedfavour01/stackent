"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

function CollapseCard({
    title,
    subtitle,
    children,
    expanded = false,
  }: {
    title: string
    subtitle: string
    children?: React.ReactNode
    expanded?: boolean
  }) {
    const [isOpen, setIsOpen] = useState(expanded)
  
    return (
      <div className="bg-black rounded-lg p-3">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div>
            <div className="text-sm font-medium text-white">{title}</div>
            <div className="text-xs text-gray-400">{subtitle}</div>
          </div>
          <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
  
        {isOpen && <div className="mt-3 pt-3 border-t border-gray-700">{children}</div>}
      </div>
    )
  }


  export default CollapseCard