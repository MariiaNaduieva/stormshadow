import React, { useRef } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { UsageSection } from "./components/UsageSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { RemoteUsageSection } from "./components/RemoteUsageSection";
import { ExamplesSection } from "./components/ExamplesSection";
import { ContactSection } from "./components/ContactSection";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const App = () => {
  const usageRef = useRef(null);
  const remoteRef = useRef(null);
  const advantagesRef = useRef(null);
  const examplesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#634d94" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Storm Shadow</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => scrollTo(remoteRef)}>
              Vzdialené používanie
            </Button>
            <Button color="inherit" onClick={() => scrollTo(advantagesRef)}>
              Výhody
            </Button>
            <Button color="inherit" onClick={() => scrollTo(examplesRef)}>
              Príklady našich prác
            </Button>
            <Button color="inherit" onClick={() => scrollTo(contactRef)}>
              Kontakty
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "92vh",
          backgroundImage: "url('/images/back.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: { xs: 2, md: 10 },
          color: "white",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            padding: { xs: 2, md: 4 },
            borderRadius: "8px",
            maxWidth: "800px",
          }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Inštalácia bezpečnostných systémov AJAX
          </Typography>
          <Typography variant="h5">
            Spoločnosť Storm Shadow s.r.o. ponúka inštaláciu systémov
            videodohľadu a bezpečnostných systémov AJAX na Slovensku
          </Typography>
          <Typography variant="h5" mt={2}>
            Zariadenie pre súkromný majetok, podniky, kaviarne a reštaurácie
          </Typography>
        </Box>

        <Button
          onClick={() => scrollTo(usageRef)}
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "3rem",
            minWidth: "auto",
            padding: 0,
            zIndex: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateX(-50%) translateY(-3px)",
              color: "#90CAF9",
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </Button>
      </Box>

      <UsageSection ref={usageRef} />
      <RemoteUsageSection ref={remoteRef} />
      <AdvantagesSection ref={advantagesRef} />
      <ExamplesSection ref={examplesRef} />
      <ContactSection ref={contactRef} />
    </>
  );
};
