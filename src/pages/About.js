// import { db } from "../firebase";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

export const About = () => {
  //   window.addEventListener("load", () => {
  //     Fetchdata();
  //   });

  //   const Fetchdata = () => {
  //     db.collection("data")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((element) => {
  //           let data = element.data();
  //           setInfo((arr) => [...arr, data]);
  //         });
  //       });
  //   };

  return <h1>{info}</h1>;
};
