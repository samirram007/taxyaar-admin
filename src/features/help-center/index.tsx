import Icon from "@/components/icon"
import { Label } from "@/components/ui/label"
import { lowerCase } from "@/utils/removeEmptyStrings"
import { useLocation, useNavigate } from "@tanstack/react-router"

const HelpCenter = () => {

    return (
        <>

            <div className='grid grid-cols-4 gap-6'>
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
        <Label className='text-lg tablet rounded-2xl border-2 p-4 flex items-start '
            onClick={handleClick}
        >
            <div className=' '>
                <Icon name={item.icon!} size={36} className='text-amber-700/70' />
            </div>
            <div>

                <div className='text-2xl'>  {item.title}</div>
                <div className='text-sm'>  {item.href}</div>
            </div>
        </Label>
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