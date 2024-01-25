import "./Main.css"
import {Menu, TestList} from "../../modules";

const Main = () =>{
    return (
        <main className="main">
            <div className="container">
                <Menu/>
                <TestList/>
            </div>
        </main>
    );
}
export default Main;