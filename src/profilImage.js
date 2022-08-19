import React from "react"
import Profil from "./img/profil.jpg";

export default function ProfilImage(){
    return (
        <div>
            <img className="profilImage" src={Profil} alt="Profil" />
        </div>
    )
}