import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import sections from "../data/sections.json";
import appendices from "../data/appendices.json";
import PageHeader from "../components/PageHeader.jsx";

const SectionOverview = () => {
  const { slug } = useParams();
  const section = sections.sitemap.find((item) => item.slug === slug) || sections.sitemap[0];
  const appendixItems = section.appendices.map((id) => appendices.find((item) => item.id === id)).filter(Boolean);

  return (
    <Box>
      <PageHeader
        title={section.title}
        goal={`Explore ${section.subtitle} with guidelines, assets, and actionable plans.`}
        breadcrumbs={[{ label: "Sections", href: "/section/strategy" }]}
        related={["Searchable", "Scannable", "Interactive"]}
        lastUpdated="Feb 2025"
      />
      <Grid container spacing={3}>
        {appendixItems.map((appendix) => (
          <Grid item xs={12} md={6} lg={4} key={appendix.id}>
            <Card component={RouterLink} to={`/appendix/${appendix.id}`} className="card-hover" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  Appendix {appendix.id}
                </Typography>
                <Typography variant="h3" sx={{ mt: 1, mb: 1 }}>
                  {appendix.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {appendix.goal}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {appendix.related.map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionOverview;
