import reactive from "@maggieliu/reactive";
import React from "react";

const Reactive = () => {
  React.useEffect(() => {
    reactive.install({
      firebaseConfig: {
        apiKey: "AIzaSyBOrlA0-Y1nTAyTKtdoThKqa2nVp7TYj40",
        authDomain: "dennisc-net.firebaseapp.com",
        databaseURL: "https://dennisc-net-default-rtdb.firebaseio.com",
        projectId: "dennisc-net",
        storageBucket: "dennisc-net.appspot.com",
        messagingSenderId: "1053172138262",
        appId: "1:1053172138262:web:7b934254f57374d7ef5037",
        measurementId: "G-4441L3S6BS",
      },
      reactions: [],
      reactionText: "",
    });
  });

  return <div id="reactive_widget" />;
};

export default Reactive;
