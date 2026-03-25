import Icon from "@/components/icon"

import { lowerCase } from "@/utils/removeEmptyStrings"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"
import { useHelpCenter } from "./contexts/help_center-context"
import { Card } from "@/components/ui/card"

const HelpCenter = () => {
    const { setHeaderVisible } = useHelpCenter()
    useEffect(() => {
        setHeaderVisible(true)
    }, [])
    return (
        <>

            <div className='grid grid-cols-3 w-full overflow-y-hidden gap-8 p-4'>
                {sidebarNavItems && sidebarNavItems.map((item) => (
                    <ItemTablet key={item.title} item={item} />
                ))}
            </div>


        </>
    )
}
export default HelpCenter

interface sidebarNavItems {
    title: string
    icon?: string
    href: string
}
const ItemTablet = ({ item }: { item: sidebarNavItems }) => {
    const router = useLocation()
    const navigate = useNavigate()
    const handleClick = () => {

        navigate({ to: `/${router.pathname}/${lowerCase(item.href.replace(' ', '_'))}` })
    }
    return (
        <Card className='w-full text-lg tablet rounded-2xl border-2 p-6 flex items-start '
            onClick={handleClick}
        >
            <div className=' shadow-md rounded-full p-4 mr-4 bg-blue-100 flex items-center justify-center 
            w-32 h-32 -ml-10 -mt-10 border-4 border-blue-300'>
                <Icon name={item.icon!} size={72} className='text-blue-700/80' />
            </div>
            <div>

                <div className='text-2xl -mt-4'>  {item.title}</div>
                <div className='text-xs text-gray-500 p-2 cursor-pointer'> link:   {item.href}</div>
            </div>
        </Card>
    )
}
const sidebarNavItems = [
    {
        title: 'Topic Category',
        icon: 'FaFileExport',
        href: '/topic_category',
    },
    {
        title: 'Topic Section',
        icon: 'FaClipboardCheck',
        href: '/topic_section',
    },
    {
        title: 'Topic Article',
        icon: 'FaBook',
        href: '/topic_article',
    },

]