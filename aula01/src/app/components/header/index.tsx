import Link from "next/link"


export function Header() {
    return (
        <header className="flex px-2 py-6 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                    <div>
                        NextJS
                    </div>

                <nav>
                    <ul className="flex items-center justify-center gap-10">
                        <li>
                            < Link href='/'>
                                HOME
                            </Link>
                        </li>
                        <li>
                            < Link href='/cadastro'>
                                CADASTRO
                            </Link>
                        </li>
                        <li>
                            < Link href='/dashboard'>
                                DASHBOARD
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}