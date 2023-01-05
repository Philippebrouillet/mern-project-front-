import React, { useContext } from "react";
import Log from "../Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
