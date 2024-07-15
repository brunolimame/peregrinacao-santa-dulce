import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import logoTopo from "../assets/logo-peregrinacao-2024.webp";

type MenuItem = {
    nome: string,
    link?: string,
    acao?: () => void
}
export default function topo() {
    const handleIrAoTopo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const { isOpen: isOpenMenu, onOpenChange: onOpenChangeMenu } = useDisclosure();

    const ItensMenu: MenuItem[] = [
        { nome: "Peregrinação 2024", link: "#", acao: handleIrAoTopo },
        { nome: "Programação", link: "#programacao", },
        { nome: "Informações", link: "#informacao", },
    ]
    return (<>

        <Navbar
            isMenuOpen={isOpenMenu}
            onMenuOpenChange={onOpenChangeMenu}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isOpenMenu ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src={logoTopo} className="max-w-[100%] max-h-[60px] max-sm:max-h-[40px]" alt="Peregrinação 2024" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {ItensMenu.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            color="foreground"
                            href={!item.acao ? item.link : undefined} onClick={item.acao ? item.acao : undefined}
                            className="cursor-pointer"
                        >
                            {item.nome}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu>
                {ItensMenu.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full cursor-pointer"
                            color="foreground"
                            href={!item.acao ? item.link : undefined} onClick={item.acao ? item.acao : undefined}
                            size="lg"
                            onClickCapture={onOpenChangeMenu}
                        >
                            {item.nome}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    </>



    )
}