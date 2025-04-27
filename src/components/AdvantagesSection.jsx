import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const advantages = [
  {
    number: "01",
    title: "Vysoká spoľahlivosť",
    description:
      "Systém Ajax je navrhnutý tak, aby zabezpečil maximálnu ochranu vašich priestorov bez výpadkov a problémov. Vďaka pokročilým technológiám, ako je bezdrôtová komunikácia a silné šifrovanie dát, môžete mať istotu, že váš majetok je v bezpečí 24/7",
  },
  {
    number: "02",
    title: "Inovatívne detektory pohybu, rozbitia skiel a otvorenia dverí",
    description:
      "Naše detektory pohybu s umelou inteligenciou presne rozlišujú medzi človekom, zvieraťom a inými objektmi, minimalizujúc falošné poplachy. Detektory rozbitia skiel okamžite reagujú na pokusy o rozbitie skla, zatiaľ čo detektory otvorenia dverí sledujú neautorizované prístupy a spúšťajú alarm pri ich otvorení. Tieto pokročilé technológie zabezpečujú maximálnu ochranu vašich priestorov",
  },
  {
    number: "03",
    title: "Poplašné tlačidlo SOS",
    description:
      "Poplašné tlačidlo vo forme kľúčenky okamžite prenáša SOS signál, a pomoc je u vás rýchlo. Tento praktický a efektívny nástroj vám poskytuje okamžitú ochranu v prípade núdze",
  },
  {
    number: "04",
    title: "Ochrana pred domácimi nehodami",
    description:
      "Naša bezpečnostná technológia ponúka prevenciu a ochranu pred rôznymi domácimi nehodami, ako sú požiare, úniky plynu či vody. Včasné detekovanie týchto hrozieb zabezpečí okamžité upozornenie a aktiváciu ochranných opatrení, čím minimalizuje potenciálne škody",
  },
];

export const AdvantagesSection = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    sx={{
      py: 14,
      px: { xs: 2, md: 4 },
      backgroundColor: "#F9FAFC",
    }}
  >
    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
      Výhody našej Ajax bezpečnostnej systému
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
        mt: 4,
      }}
    >
      {advantages.map((adv, idx) => (
        <Paper
          key={idx}
          elevation={3}
          sx={{
            width: { xs: "100%", md: "45%" },
            p: 3,
            borderRadius: 2,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.03)" },
          }}
        >
          <Typography variant="h5" color="#634d94" fontWeight={500}>
            {adv.number}
          </Typography>
          <Typography variant="h6" fontWeight="bold" mt={1}>
            {adv.title}
          </Typography>
          <Typography mt={1}>{adv.description}</Typography>
        </Paper>
      ))}
    </Box>
  </Box>
));
