import { Link } from "react-router-dom";
import Button from "./Components/Button";
import Iconify from "./Components/Iconify";
import Stack from "./Components/Stack";
import Typografy from "./Components/Typografy";
//styles
import "./GlobalStyles.css";

function App() {
  return (
    <div>
      <Stack
        st={{ height: "100vh", width: "100vw" }}
        justifyContent="center"
        spacing={1}
      >
        <Iconify icon="carbon:ibm-process-mining" size={35} />
        <Typografy>The Proyect Come Soon...</Typografy>
      </Stack>
    </div>
  );
}

export default App;
