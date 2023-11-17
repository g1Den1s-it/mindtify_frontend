import UserMenu from "../../components";
import Logo from "../../ui";
import "./Menu.css"
const Menu = () =>{
    return (
        <header className="menu">
            <Logo url="/" />
            <UserMenu></UserMenu>
        </header>
    );
}
export default Menu;