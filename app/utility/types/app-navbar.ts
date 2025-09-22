interface LinkChild {
    name: string;
    href: string;
}

interface LinkItem {
    name: string;
    href: string;
    type?: "multipart";
    description?: string;
    children?: LinkChild[];
}

interface MobileNavigationItemProps {
    item: LinkItem;
    isActive: (href: string) => boolean;
    onClose: () => void;
}

interface DesktopNavigationItemProps {
    item: LinkItem;
    isActive: (href: string) => boolean;
}