'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import cl from "./style.module.css"

export function NavLinks() {
    const pathname = usePathname()

    return (
        <nav>
            <div className={cl.nacCont}>
                <Link className={`${cl.link} ${pathname === '/' ? cl.active : ''}`} href="/">
                    Home
                </Link>

                <Link
                    className={`${cl.link} ${pathname === '/pages' ? cl.active : ''}`}
                    href={"/pages"}
                >
                    Pages
                </Link>
                <Link
                    className={`${cl.link} ${pathname === '/svo' ? cl.active : ''}`}
                    href={"/svo"}
                >
                    SVO
                </Link>
            </div>

        </nav>
    )
}