"use client"

import * as React from "react"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image"
import Link from "next/link"


export function DropdownMenuRadioGroupDemo() {

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Sign In</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href="https://sphere.bnr360.com" className="flex justify-center items-center">
                            <Image src="/images/spheres.webp" alt="BnR360 Logo" width={120} height={120} />
                            {/* <p className="ml-4 text-2xl">Sphere</p> */}
                        </Link>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Link href="https://genrapide.bnr360.com" className="flex justify-center items-center p-2">
                            <Image src="/images/gen-logo.webp" alt="BnR360 Logo" width={140} height={140} />
                            {/* <p className="ml-4 text-2xl">Sphere</p> */}
                        </Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
