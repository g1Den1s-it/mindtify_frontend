import React, {useEffect, useState} from "react";
import {AllTest, Menu, Statistic} from "../../modules";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";


const Profile = () => {
    const user = useSelector(state => state.user);
    const [userData, setUserData] = useState({});
    const [activeBtn, setActiveBtn] = useState();

    useEffect(() => {
        if(user && user.user){
            setUserData(user.user);
        }
    }, [user]);

    const activeHandler = (name) =>{
        setActiveBtn(name);
    };

    return(
        <div className="profile">
            <Menu></Menu>
            <div className="profile-greeting">
                <h2>Hello {userData.username}</h2>
                <p>it's good to see you again.</p>
            </div>
            <main className="profile-main">
                <div className="profile-container">
                    <div className={`profile-btn section-btn ${activeBtn === "Test" ? 'active' : ""}`} onClick={() => activeHandler("Courses")}>All Tests</div>
                    <div className={`profile-btn section-btn ${activeBtn === "Statistic" ? 'active' : ""} `} onClick={() => activeHandler("Statistic")}>Statistic</div>
                </div>
                <div>
                    {
                        activeBtn === "Courses"
                            ?
                                <AllTest></AllTest>
                            :
                                <Statistic></Statistic>
                    }
                </div>
            </main>
        </div>
    );
};

export default Profile;