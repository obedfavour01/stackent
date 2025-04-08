import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



type FilterProps = { options: string[], width: number, label: string }

export function Filter({ options, label,width }: FilterProps) {
    return (
        <Select>
            <SelectTrigger
                className="w-[180px] bg-transparent text-white border-[0.5px] border-gray-600 relative overflow-hidden px-3"
                style={{ width: `${width}px` }}>
                <SelectValue placeholder={options[0]} className="text-white" style={{ color: "white" }} />
                {/* <BorderBeam size={8} colorFrom="#8d7474" colorTo="#fc2929" className="" /> */}
            </SelectTrigger>
            <SelectContent className="bg-black w-fit">
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {options.map((val, ind) => (
                        <SelectItem
                            key={ind}
                            value={val}
                            className="hover:bg-black" >
                            {val}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>

        </Select>
    )
}
