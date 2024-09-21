import { Box } from "@chakra-ui/react";
import CardSection from "../cards/card-section";

const SectionNine = () => {
  return (
    <Box w="100%" position="relative" marginTop="80px">
      <Box display="flex" flexDir="column">
        <CardSection
          image="/assets/blockchain.webp"
          title="REMESAS"
          subTitle="¡Envía remesas de manera <br /> más eficiente y económica con Remitt!"
          text="Superamos los altos costos y la burocracia de los bancos tradicionales con nuestra plataforma revolucionaria de remesas. <br /><br /> Ofrecemos una experiencia de usuario de alto nivel y una interfaz amigable que te permitirá enviar dinero de forma segura, confiable y transparente."
          background="var(--bg-gradient-card-4)"
          direction="row"
        />
        <CardSection
          image="/assets/blockchain-1.webp"
          title="LENDING DE PRESTAMOS"
          subTitle="¿Requieres un préstamo en cripto?"
          text="En Remitt queremos impulsar tu libertad. Entre el abanico de opciones financieras que pondremos a disposición de cada persona alrededor del mundo, el lending de prestamos sera una de ella. <br /><br /> Ofrecemos excelentes rendimientos y una tasa de interés única en el mercado."
          background="var(--bg-gradient-card-4)"
          direction="row"
        />
      </Box>
    </Box>
  );
};

export default SectionNine;
