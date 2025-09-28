import Container from "./Container";

const Toggles_Btns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <Container>
      <div className="text-right mb-[50px]">
        {btns.map((btn, ind) => {
          return (
            <button
              key={ind}
              className={` ${ind == 0 && "rounded-l-md"} 
              ${ind == btns.length - 1 && "rounded-r-md"}
              toggle-btn
                ${toggleStatus == btn && "!bg-purple-500 !text-white"}
              `}
              onClick={() => setToggleStatus(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </Container>
  );
};

export default Toggles_Btns;
