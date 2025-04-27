import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close, ChevronLeft, ChevronRight } from "@mui/icons-material";

export const ExamplesSection = React.forwardRef((props, ref) => {
  const images = ["img1.webp", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (i) => {
    setCurrentIndex(i);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const showPrev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        px: { xs: 2, md: 4 },
        py: 14,
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Zákazníci z prevádzky, ktorí boli s našou prácou maximálne spokojní
      </Typography>

      <Typography variant="body1" maxWidth="700px" mx="auto" mb={2}>
        Jedno z miest, ktoré by ste mali poznať v Bratislave – Old Vibe Winery
      </Typography>
      <Typography variant="body1" mx="auto" mb={4}>
        V tomto štýlovom vinárstve sme realizovali inštaláciu moderného
        kamerového a zabezpečovacieho systému AJAX. Spoľahlivá ochrana,
        diskrétny dizajn a úplná spokojnosť zákazníka – presne to, čo od nás
        môžete očakávať.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {images.map((img, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Box
              onClick={() => handleOpen(idx)}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                component="img"
                src={`/images/${img}`}
                alt={`Príklad ${idx + 1}`}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" mx="auto" mt={4}>
        V tejto štýlovej vinotéke sme realizovali kompletný bezpečnostný systém.
        Bolo nainštalovaných 7 káblových kamier, z toho 2 s rozlíšením 8 MP a 4K
        živým prenosom. Súčasťou projektu bola aj ochrana proti vniknutiu –
        senzory na dverách a detektory rozbitia skla. Celá inštalácia prebehla
        rýchlo, profesionálne a načas, s následným napojením na monitorovací
        systém bezpečnostnej služby.
      </Typography>
      <Typography variant="body1" maxWidth="600px" mx="auto" mt={2}>
        Zákazník bol maximálne spokojný s kvalitou našej práce.
      </Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="md"
        PaperProps={{
          sx: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <Box
          onClick={handleClose}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <Close />
          </IconButton>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              transform: "translateY(-50%)",
            }}
          >
            <ChevronLeft />
          </IconButton>

          <Box
            sx={{
              height: fullScreen ? "80vh" : "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              component="img"
              src={`/images/${images[currentIndex]}`}
              alt={`Príklad ${currentIndex + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                const { clientX, currentTarget } = e;
                const middle = currentTarget.offsetWidth / 2;
                if (clientX < middle) {
                  showPrev();
                } else {
                  showNext();
                }
              }}
              sx={{
                maxWidth: "90vw",
                maxHeight: "70vh",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Box>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              transform: "translateY(-50%)",
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
});
