import { ClipLoader } from "react-spinners";

const Loader = ({ size = 50, color = "#3498db" }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
