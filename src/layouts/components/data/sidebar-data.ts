import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconNotification,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

const APP_NAME = import.meta.env.VITE_APP_NAME || 'Shadcn Admin'
const APP_SUBTITLE = import.meta.env.VITE_APP_SUBTITLE || 'Admin Dashboard'
export const sidebarData: SidebarData = {
  user: {
    name: 'samir',
    visible: true,
    email: 'samir.dev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  header: {
    logo: GalleryVerticalEnd,
    visible: true,
    title: APP_NAME,
    subtitle: APP_SUBTITLE,
  },
  teams: [
    {
      name: 'ShadcnAdminBike',
      visible: true,
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      visible: true,
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      visible: true,
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],

  navGroups: [

    {
      title: 'General',
      visible: true,
      items: [
        {
          title: 'Dashboard',
          visible: true,
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Help Center',
          visible: true,
          url: '/help-center',
          icon: IconHelp,
        },

      ],
    },
    {
      title: 'Pages',
      visible: false,
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },

    {
      title: 'Other',
      visible: true,
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },

      ],
    },
  ],
}
