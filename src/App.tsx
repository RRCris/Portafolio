import Button from "./Components/Button";
import Iconify from "./Components/Iconify";
import Stack from "./Components/Stack";
import Typografy from "./Components/Typografy";
//styles
import "./GlobalStyles.css";

function App() {
  return (
    <div>
      <Stack spacing={4} st={{ height: "90px", background: "#c9c" }}>
        <Button type="primary">
          <Iconify icon="gis:arrow-o" />
          <Typografy>children</Typografy>
        </Button>
        <Button>
          <Iconify icon="gis:arrow-o" />
          hola
        </Button>
        <Button type="secondary">
          <Iconify icon="gis:arrow-o" />
          hola
        </Button>
        <Typografy>hoal bbee</Typografy>
      </Stack>
    </div>
  );
}

export default App;