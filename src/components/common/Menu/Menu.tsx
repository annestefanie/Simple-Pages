import MenuItem from "./MenuItem";
import { Divider } from "../Divider"
import { Library } from "lucide-react";
import { ChartLine, Clock, User } from "lucide-react";

interface MenuProps {
    isMenuOpen: boolean;
    onClose: () => void;
}

function Menu({isMenuOpen, onClose} : MenuProps){

    if (!isMenuOpen) return null;

    return(
        <section className="fixed inset-0 z-99 ">
            <div className="border-border border absolute right-15 top-11 w-60 rounded-2xl  shadow-xl bg-white flex flex-col font-code p-2 items-end gap-1 items-center justify-center">
                <MenuItem page="MY LIBRARY" description="Manage all your saved books" icon={<Library size={30}/>} />
                <Divider />
                <MenuItem page="PROGRESS" description="See your evolution" icon={<ChartLine size={30}/>} />
                <Divider />
                <MenuItem page="READING SECTION" description="Track your reading time" icon={<Clock size={30}/>} />
                <Divider />
                <MenuItem page="MY ACCOUNT" description="View your profile" icon={<User size={30}/>} />
            </div>
        </section>
    )
}

export default Menu;