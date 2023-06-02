import Iconify from "../../Components/Iconify";
import PageHead from "../../Components/PageHead";
import Stack from "../../Components/Stack";
import Typografy from "../../Components/Typografy";

function BuildingPage() {
  return (
    <PageHead page="buildPage">
      <Stack
        st={{ height: "100vh", width: "100vw" }}
        justifyContent="center"
        spacing={1}
      >
        <Iconify icon="carbon:ibm-process-mining" size={35} />
        <Typografy>
          Esta Pagina no esta disponible por que esta siendo actulizada
        </Typografy>
        <Typografy type="bodySmall">
          Por favor intente nuevamente más tarde
        </Typografy>
      </Stack>
    </PageHead>
  );
}

export default BuildingPage;
