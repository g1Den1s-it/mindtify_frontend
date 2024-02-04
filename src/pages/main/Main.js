import "./Main.css"
import {Menu, TestList} from "../../modules";

const Main = () =>{
    return (
        <main className="main" data-testid="main">
            <div className="container">
                <Menu/>
                <TestList/>
            </div>
        </main>
    );
}
export default Main;