import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsvisible] = useState(false);
  console.log("andrei");
  const click = () => {
    alert("A venit Alex Sefu");
  };
  return (
    <div
      className="h-screen"
      onClick={() => {
        if (!isVisible) {
          setIsvisible(!isVisible);
        }
      }}
    >
      <h1 className="bg-red-200 text-center">
        Alex regele lui Cristi Andrei si toni
      </h1>
      <p className="text-center text-2xl bold text-white andrei">
        daca nu esti prost,o sa ai un rost
      </p>
      {isVisible ? (
        <img
          onClick={click}
          src="https://scontent.fcra2-1.fna.fbcdn.net/v/t39.30808-6/270579255_119261443931143_9115671524296718870_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=95gAMqEvAAcAX9CsE5s&_nc_ht=scontent.fcra2-1.fna&oh=00_AfDgP0ROjadKB5mgAWoTX4DfmFoZQ4vxdJ22gQKVOdMIdw&oe=643D89BC"
        />
      ) : null}
    </div>
  );
}
