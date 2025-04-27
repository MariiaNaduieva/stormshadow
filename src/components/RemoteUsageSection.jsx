import React from "react";
import { Box, Typography } from "@mui/material";

export const RemoteUsageSection = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        backgroundImage: "url('/images/back2.png')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 12,
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Vzdialené kamerové sledovanie cez vaše zariadenia
          </Typography>
          <Typography fontWeight="bold" mt={2}>
            Vysokokvalitné internetové pripojenie pre plynulý video prenos
          </Typography>
          <Typography>
            Naše bezpečnostné kamery sú vybavené spoľahlivým pripojením s
            vysokou odosielacou rýchlosťou, vďaka čomu si môžete vychutnať živý
            obraz bez sekania alebo výpadkov.
          </Typography>
          <Typography fontWeight="bold" mt={2}>
            Sledujte dianie v reálnom čase
          </Typography>
          <Typography>
            Z akéhokoľvek miesta na svete – ako by ste boli práve tam.
          </Typography>
          <Typography fontWeight="bold" mt={2}>
            Vaša bezpečnosť na dosah ruky – kedykoľvek a kdekoľvek.
          </Typography>
          <Typography fontWeight="bold" mt={4}>
            Sledovanie prenosu cez PC, telefón alebo tablet
          </Typography>
          <Typography>
            Prenos z kamier môžete pohodlne sledovať cez počítač, telefón alebo
            tablet – na zariadeniach s Android aj iOS – pomocou špeciálnej
            aplikácie. Jednoduchý prístup, kdekoľvek sa nachádzate.
          </Typography>
        </Box>

        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src="/images/ajax.png"
            alt="Monitoring preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
});
