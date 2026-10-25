import { createPortal } from "react-dom";

function Portal_to_mainnav({ children }) {
  const portalRoot = document.getElementById("mainnav");
  return createPortal(children, portalRoot);
}

export default Portal_to_mainnav;