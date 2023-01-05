import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Trends from "../components/Trends";
import LeftNav from "../components/LeftNav";
import Log from "../Log";
import NewPostForm from "../Post/NewPostForm";
import Thread from "../components/Thread";
import FriendsHint from "../Profil/FriendsHint";
const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
            {uid && <FriendsHint />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
