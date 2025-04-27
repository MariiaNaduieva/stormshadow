import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { LocationOn, Phone, Email, AccessTime } from "@mui/icons-material";

export const ContactSection = React.forwardRef((props, ref) => {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Bazova+8,+821+08,+Bratislava",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+421910291151";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:storm.shadow.sro@gmail.com";
  };

  return (
    <Box
      ref={ref}
      sx={{
        px: 4,
        py: 10,
        backgroundImage: "url('/images/back.png')",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom mb={8}>
        Kontakty
      </Typography>

      <Grid container spacing={8} justifyContent="center" mt={4}>
        {[
          {
            Icon: LocationOn,
            label: "Adresa",
            action: handleLocationClick,
            content: "Bazova 8, 821 08, Bratislava",
          },
          {
            Icon: Phone,
            label: "Telefón",
            action: handlePhoneClick,
            content: "+421 910 291 151 - Nikita",
          },
          {
            Icon: Email,
            label: "Email",
            action: handleEmailClick,
            content: "storm.shadow.sro@gmail.com",
          },
          {
            Icon: AccessTime,
            label: "Otváracie hodiny",
            action: () => {},
            content: "Po–Pia: 9:00 – 17:00",
          },
        ].map(({ Icon, label, action, content }, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Box
              onClick={action}
              sx={{
                p: 3,
                borderRadius: 2,
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  "& svg": { color: "#fff" },
                },
                cursor: "pointer",
              }}
            >
              <Icon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">{label}</Typography>
              <Box mt={0.5}>{content}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});
