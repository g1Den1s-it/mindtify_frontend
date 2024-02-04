import {UserMenu} from "../../components";
import {Logo} from "../../ui";
import "./Menu.css"
const Menu = () =>{
    return (
        <header data-testid="menu" className="menu">
            <Logo data-testid="logo" url="/" />
            <UserMenu data-testid="user-menu" ></UserMenu>
        </header>
    );
}
export default Menu;