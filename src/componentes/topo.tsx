import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import logoTopo from "../assets/logo-peregrinacao-2024.webp";
export default function topo() {
    const handleIrAoTopo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <Navbar className="py-3" maxWidth="2xl">
            <NavbarBrand className="flex items-center">
                <Image src={logoTopo} className="max-w-[100%] h-[60px]" alt="Peregrinação 2024" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link color="foreground" onClick={handleIrAoTopo} className="cursor-pointer">
                        Peregrinação 2024
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="cursor-pointer">
                        Programação
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="cursor-pointer">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}