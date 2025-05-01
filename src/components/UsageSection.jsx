import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const UsageSection = React.forwardRef((_, ref) => {
  const cards = [
    {
      image: "/images/cam.png",
      title: "Monitorovanie vašich priestorov 24/7",
      description: `Pohodlná aplikácia AJAX vám umožňuje sledovať vašu kaviareň alebo súkromný majetok priamo vo vašom telefóne alebo počítači – a to aj naživo (LIVE).  
Môžete si zvoliť, či kamery budú zaznamenávať nepretržite do archívu 24/7, alebo sa aktivujú len vtedy, keď umelá inteligencia deteguje pohyb, človeka, psa alebo inú aktivitu – a automaticky to uložia do archívu.  
K dispozícii sú aj kamery s rozlíšením 4K, ktoré poskytujú neuveriteľne ostrý obraz – kvalitu, ktorú bežne na trhu nenájdete. Moderné riešenie, ktoré šetrí váš čas, pamäť a zároveň vám poskytuje maximálny prehľad a istotu.`,
    },
    {
      image: "/images/cam2.png",
      title: "Ochrana proti vniknutiu",
      description: `Ochrana proti neautorizovanému otvoreniu dverí – Systémy, ktoré detekujú pokusy o násilné otvorenie dverí a neautorizovanému otvoreniu dverí okamžite vás upozornia. \n
        Detekcia rozbitia skiel – Inovatívne senzory, ktoré zachytia akýkoľvek pokus o rozbitie okien alebo sklenených dverí, čím okamžite spustia alarm a upozornia vás na hrozbu. \n
        Detektory pohybu – Inteligentné senzory, ktoré monitorujú pohyb v stráženom priestore. Vďaka pokročilej technológii dokážu rozlíšiť medzi človekom, zvieraťom alebo náhodným pohybom, čím znižujú počet falošných poplachov a zabezpečujú presnú reakciu na skutočné hrozby.`,
    },
    {
      image: "/images/cam3.webp",
      title: "Ochrana proti napadnutiu",
      description: `Pri stlačení poplašného tlačidla signál okamžite putuje na pult centrálneho monitorovania. Operátor centra ihneď vyšle najbližšiu skupinu rýchlej reakcie k vašej adrese.`,
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 60 }} />,
      title: "Non‑stop technická podpora",
      description: `Aj po inštalácii našich bezpečnostných systémov sme vždy k dispozícii. Ak sa niečo pokazí alebo systém nefunguje správne, náš tím je pripravený okamžite reagovať a vyriešiť problém. Vaša bezpečnosť je pre nás na prvom mieste, a preto vám poskytujeme podporu 24/7.`,
    },
  ];

  return (
    <Box ref={ref} sx={{ py: 10, backgroundColor: "#fafafa" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ mb: 5 }}
      >
        Výberom nás získate
      </Typography>
      <Container>
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid key={i} item xs={12} md={6}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: 120,
                    minHeight: 120,
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mr: 2,
                  }}
                >
                  {card.image ? (
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    card.icon
                  )}
                </Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" fontWeight={"bold"} gutterBottom>
                    {card.title}
                  </Typography>

                  <Typography variant="body1">{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});
