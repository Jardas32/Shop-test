import "../css/btnup.css";
import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";

function BtnUp() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const showBtngoup = () => {
      if (window.scrollY >= 160) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    document.addEventListener("scroll", showBtngoup);

    return () => document.removeEventListener("scroll", showBtngoup);
  }, []);

  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showBtn && (
        <div onClick={() => handleGoUp()} className="wrappet-btnup">
          <FaArrowUp className="img-arrowup" />
        </div>
      )}
    </>
  );
}

export default BtnUp;
