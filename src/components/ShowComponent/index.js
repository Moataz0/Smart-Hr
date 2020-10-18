import { useSelector } from "react-redux";
function ShowComponent({ Component }) {
  const { showComponent } = useSelector((p) => p);
  if (showComponent) return Component;
  else return null;
}

export default ShowComponent;
