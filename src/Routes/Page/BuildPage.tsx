import Iconify from "../../Components/Iconify";
import PageHead from "../../Components/PageHead";
import Stack from "../../Components/Stack";
import Typografy from "../../Components/Typografy";

function BuildingPage() {
  return (
    <PageHead
      title="Welcome | Developer Web"
      describe="pagina de bienvenida de el portafolio web"
    >
      <Stack
        st={{ height: "100vh", width: "100vw" }}
        justifyContent="center"
        spacing={1}
      >
        <Iconify icon="carbon:ibm-process-mining" size={35} />
        <Typografy>The Proyect Come Soon...</Typografy>
      </Stack>
    </PageHead>
  );
}

export default BuildingPage;
