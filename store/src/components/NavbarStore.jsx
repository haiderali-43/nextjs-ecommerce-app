import Image from 'next/image'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const NavbarStore = () => {
    return (
        <div>
            <div>
                <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </div>
            <div>
                <input type="text" placeholder='Searching for...' />
                <Select>
                    <SelectTrigger>
                        <SelectValue>ALL Category</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default NavbarStore
