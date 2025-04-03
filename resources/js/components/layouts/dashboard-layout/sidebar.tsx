import { NavFooter } from '@/components/elements/nav-footer';
import { NavMain } from '@/components/elements/nav-main';
import { NavUser } from '@/components/elements/nav-user';
import {
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    Sidebar as SidebarUI,
} from '@/components/ui/sidebar';
import { mainNavItems, rightNavItems } from '@/lib/navigations';
import { Link } from '@inertiajs/react';
import { Logo } from './logo';

export function Sidebar() {
    return (
        <SidebarUI collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <Logo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={rightNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </SidebarUI>
    );
}
