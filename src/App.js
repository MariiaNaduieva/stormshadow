import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import { UsageSection } from "./components/UsageSection";
import { RemoteUsageSection } from "./components/RemoteUsageSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { ExamplesSection } from "./components/ExamplesSection";
import { ContactSection } from "./components/ContactSection";

export const App = () => {
  const usageRef = useRef(null);
  const remoteRef = useRef(null);
  const advantagesRef = useRef(null);
  const examplesRef = useRef(null);
  const contactRef = useRef(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { label: "Naša ponuka", ref: usageRef },
    { label: "Vzdialené používanie", ref: remoteRef },
    { label: "Výhody", ref: advantagesRef },
    { label: "Príklady našich prác", ref: examplesRef },
    { label: "Kontakty", ref: contactRef },
  ];

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#1a1a1a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            onClick={scrollToTop}
            sx={{ cursor: "pointer", "&:hover": { color: "#fff" } }}
          >
            Storm Shadow
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List sx={{ width: 250 }}>
                  {menuItems.map(({ label, ref }) => (
                    <ListItem key={label} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setDrawerOpen(false);
                          scrollTo(ref);
                        }}
                      >
                        <ListItemText primary={label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {menuItems.map(({ label, ref }) => (
                <Button
                  key={label}
                  color="inherit"
                  onClick={() => scrollTo(ref)}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "92vh",
          backgroundImage: "url('/images/back.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-end",
          px: { xs: 2, md: 10 },
          color: "white",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 2,
            maxWidth: { xs: "90%", sm: "80%", md: "800px" },
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight="bold"
            gutterBottom
          >
            Inštalácia bezpečnostných systémov AJAX na Slovensku
          </Typography>
          <Typography variant={isMobile ? "body1" : "h5"} mb={isMobile ? 1 : 2}>
            Spoločnosť Storm Shadow s.r.o. ponúka inštaláciu systémov
            videodohľadu a bezpečnostných systémov AJAX na Slovensku
          </Typography>
          <Typography variant={isMobile ? "body1" : "h5"}>
            Zariadenie pre súkromný majetok, podniky, kaviarne a reštaurácie
          </Typography>
        </Box>

        <Button
          onClick={() => scrollTo(usageRef)}
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "3rem",
            minWidth: "auto",
            p: 0,
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
