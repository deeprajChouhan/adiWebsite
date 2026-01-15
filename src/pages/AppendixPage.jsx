import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import { PieChart, BarChart, LineChart } from "@mui/x-charts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CampaignIcon from "@mui/icons-material/Campaign";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import DescriptionIcon from "@mui/icons-material/Description";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForestIcon from "@mui/icons-material/Forest";
import ForumIcon from "@mui/icons-material/Forum";
import GroupsIcon from "@mui/icons-material/Groups";
import HearingIcon from "@mui/icons-material/Hearing";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ParkIcon from "@mui/icons-material/Park";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import RateReviewIcon from "@mui/icons-material/RateReview";
import RedeemIcon from "@mui/icons-material/Redeem";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import SavingsIcon from "@mui/icons-material/Savings";
import SchoolIcon from "@mui/icons-material/School";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SpaIcon from "@mui/icons-material/Spa";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VideocamIcon from "@mui/icons-material/Videocam";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WorkIcon from "@mui/icons-material/Work";
import appendices from "../data/appendices.json";
import PageHeader from "../components/PageHeader.jsx";
import SectionCard from "../components/SectionCard.jsx";
import DownloadPanel from "../components/DownloadPanel.jsx";
import KPIStatCard from "../components/KPIStatCard.jsx";
import InfographicPanel from "../components/InfographicPanel.jsx";
import GuidelineAccordion from "../components/GuidelineAccordion.jsx";
import ComparisonTabs from "../components/ComparisonTabs.jsx";
import TagChips from "../components/TagChips.jsx";
import CopyBlock from "../components/CopyBlock.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { useLayout } from "../components/LayoutProvider.jsx";
import FlowDiagram from "../components/FlowDiagram.jsx";

const useAppendixData = (id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(appendices.find((item) => item.id === id));
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [id]);

  return { data, loading };
};

const splitSteps = (text) => {
  const normalized = text.replace(/\.$/, "");
  if (normalized.includes("→")) {
    return normalized.split("→").map((step) => step.trim()).filter(Boolean);
  }
  return normalized.split(",").map((step) => step.trim()).filter(Boolean);
};

const getFlowData = (section) => {
  const label = `${section.title} ${section.id}`.toLowerCase();
  if (!/step|cycle/.test(label)) return null;
  const bodyText = Array.isArray(section.body) ? section.body.join(" ") : section.body;
  const steps = splitSteps(bodyText);
  if (steps.length < 2) return null;
  return {
    variant: label.includes("cycle") ? "cycle" : "steps",
    steps
  };
};

const ValueCanvas = ({ canvas }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <InfographicPanel title="Customer Profile">
        <Typography variant="subtitle2">Customer Jobs</Typography>
        <List dense>
          {canvas.customerProfile.jobs.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2">Pains</Typography>
        <List dense>
          {canvas.customerProfile.pains.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2">Gains</Typography>
        <List dense>
          {canvas.customerProfile.gains.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </InfographicPanel>
    </Grid>
    <Grid item xs={12} md={6}>
      <InfographicPanel title="Value Map">
        <Typography variant="subtitle2">Products & Services</Typography>
        <List dense>
          {canvas.valueMap.products.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2">Pain Relievers</Typography>
        <List dense>
          {canvas.valueMap.painRelievers.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2">Gain Creators</Typography>
        <List dense>
          {canvas.valueMap.gainCreators.map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </InfographicPanel>
    </Grid>
  </Grid>
);

const PersonalitySliders = ({ personality }) => (
  <Grid container spacing={2}>
    {Object.entries(personality).map(([label, value]) => (
      <Grid item xs={12} md={6} key={label}>
        <Card variant="outlined" sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h3">{value} / 5</Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const PositioningMap = ({ positioning }) => {
  const [markers, setMarkers] = useState(positioning.markers);
  const [activeId, setActiveId] = useState(null);

  const handlePointerDown = (id) => () => setActiveId(id);

  const handlePointerMove = (event) => {
    if (!activeId) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(0, ((event.clientX - rect.left) / rect.width) * 100), 100);
    const y = Math.min(Math.max(0, ((event.clientY - rect.top) / rect.height) * 100), 100);
    setMarkers((prev) => prev.map((marker) => (marker.id === activeId ? { ...marker, x, y } : marker)));
  };

  const handlePointerUp = () => setActiveId(null);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <InfographicPanel title="Perceptual positioning map">
          <Box
            role="presentation"
            sx={{
              position: "relative",
              height: 320,
              borderRadius: 2,
              border: "1px dashed rgba(0,0,0,0.2)",
              background: "linear-gradient(135deg, rgba(46,95,77,0.08), rgba(216,164,77,0.08))"
            }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <Typography variant="caption" sx={{ position: "absolute", left: 8, top: 8 }}>
              {positioning.axes.y} (Low → High)
            </Typography>
            <Typography variant="caption" sx={{ position: "absolute", right: 8, bottom: 8 }}>
              {positioning.axes.x} (Affordable → Expensive)
            </Typography>
            {markers.map((marker) => (
              <Box
                key={marker.id}
                role="button"
                tabIndex={0}
                onPointerDown={handlePointerDown(marker.id)}
                sx={{
                  position: "absolute",
                  left: `${marker.x}%`,
                  top: `${100 - marker.y}%`,
                  transform: "translate(-50%, -50%)",
                  padding: "6px 10px",
                  borderRadius: "999px",
                  backgroundColor: marker.color,
                  color: "#fff",
                  fontSize: "0.75rem",
                  cursor: "grab",
                  boxShadow: 2
                }}
              >
                {marker.label}
              </Box>
            ))}
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            Drag markers to explore different scenarios. Use keyboard focus to review placements.
          </Typography>
        </InfographicPanel>
      </Grid>
      <Grid item xs={12} md={4}>
        <InfographicPanel title="Why we win">
          <List>
            {positioning.whyWeWin.map((item) => (
              <ListItem key={item} disableGutters>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </InfographicPanel>
      </Grid>
    </Grid>
  );
};

const ObjectivesDashboard = ({ objectives }) => {
  const [tab, setTab] = useState(0);
  const tabData = [
    { label: "Short term", data: objectives.short },
    { label: "Medium term", data: objectives.medium },
    { label: "Long term", data: objectives.long }
  ];

  return (
    <Box>
      <Tabs value={tab} onChange={(_, value) => setTab(value)} aria-label="Objective tabs">
        {tabData.map((item, index) => (
          <Tab key={item.label} label={item.label} id={`objective-tab-${index}`} />
        ))}
      </Tabs>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {tabData[tab].data.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <SectionCard title={item.title}>
              <Typography variant="body2" color="text.secondary">
                KPI: {item.kpi}
              </Typography>
            </SectionCard>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={4}>
          <KPIStatCard label="Brand recall" value="+30%" progress={64} />
        </Grid>
        <Grid item xs={12} md={4}>
          <KPIStatCard label="Template adoption" value="100%" progress={88} />
        </Grid>
        <Grid item xs={12} md={4}>
          <KPIStatCard label="Weekly covers" value="+10%" progress={55} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <LineChart
          xAxis={[{ scaleType: "point", data: ["Month 1", "Month 3", "Month 6", "Month 12"] }]}
          series={[{ data: [20, 38, 55, 72], color: "#2E5F4D" }]}
          height={240}
        />
      </Box>
    </Box>
  );
};

const KPIBoard = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
      <KPIStatCard label="Brand awareness" value="Top 3" progress={72} />
    </Grid>
    <Grid item xs={12} md={3}>
      <KPIStatCard label="Booking conversion" value="+40%" progress={60} />
    </Grid>
    <Grid item xs={12} md={3}>
      <KPIStatCard label="NPS score" value="+15" progress={58} />
    </Grid>
    <Grid item xs={12} md={3}>
      <KPIStatCard label="EBITDA margin" value="+10%" progress={48} />
    </Grid>
    <Grid item xs={12}>
      <BarChart
        xAxis={[{ scaleType: "band", data: ["Brand", "Digital", "Customer", "Financial", "Operations"] }]}
        series={[{ data: [70, 62, 58, 45, 55], color: "#4B8B5E" }]}
        height={260}
      />
    </Grid>
  </Grid>
);

const RoadmapTimeline = () => (
  <Grid container spacing={2}>
    {[
      { title: "Phase 1", body: "Brand strategy + identity", time: "Q1" },
      { title: "Phase 2", body: "Menu + pricing messaging rollout", time: "Q2" },
      { title: "Phase 3", body: "Loyalty + CRM launch", time: "Q3" },
      { title: "Phase 4", body: "Optimisation and campaigns", time: "Q4" }
    ].map((phase) => (
      <Grid item xs={12} md={3} key={phase.title}>
        <SectionCard title={phase.title}>
          <Typography variant="body2" color="text.secondary">
            {phase.body}
          </Typography>
          <Typography variant="caption">{phase.time}</Typography>
        </SectionCard>
      </Grid>
    ))}
  </Grid>
);

const BudgetCharts = ({ budget }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <PieChart
        series={[
          {
            data: budget.map((item, index) => ({ id: index, value: item.value, label: item.label }))
          }
        ]}
        height={260}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <BarChart
        xAxis={[{ scaleType: "band", data: budget.map((item) => item.label) }]}
        series={[{ data: budget.map((item) => item.value), color: "#A27C4B" }]}
        height={260}
      />
    </Grid>
  </Grid>
);

const IconCard = ({ icon: Icon, title, body }) => (
  <Card variant="outlined" sx={{ height: "100%" }}>
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "rgba(46,95,77,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2E5F4D"
          }}
        >
          <Icon fontSize="small" />
        </Box>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {body}
      </Typography>
    </CardContent>
  </Card>
);

const MessagingPyramid = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      {
        title: "Customer benefit",
        body: "Lead with tangible value: healthier, fresher, affordable dining.",
        icon: FavoriteBorderIcon
      },
      {
        title: "Proof",
        body: "Back claims with supplier lists, targets, and actions.",
        icon: FactCheckIcon
      },
      {
        title: "Values",
        body: "Connect to community, transparency, and responsibility.",
        icon: AutoGraphIcon
      }
    ].map((item, index) => (
      <Grid item xs={12} key={item.title}>
        <Card variant="outlined" sx={{ position: "relative", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                backgroundColor: "rgba(46,95,77,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2E5F4D"
              }}
            >
              <item.icon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </Box>
          </Box>
          {index < 2 && (
            <Box
              sx={{
                position: "absolute",
                left: 32,
                bottom: -12,
                width: 2,
                height: 24,
                backgroundColor: "rgba(46,95,77,0.3)"
              }}
            />
          )}
        </Card>
      </Grid>
    ))}
  </Grid>
);

const StorytellingFramework = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Local suppliers", body: "Celebrate farms, makers, and provenance.", icon: StorefrontIcon },
      { title: "Community involvement", body: "Show partnerships with schools and charities.", icon: GroupsIcon },
      { title: "Seasonal food stories", body: "Highlight harvest-led menu moments.", icon: WbSunnyIcon },
      { title: "Staff culture", body: "Spotlight teams and everyday hospitality.", icon: EmojiPeopleIcon }
    ].map((item) => (
      <Grid item xs={12} md={6} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
    <Grid item xs={12}>
      <FlowDiagram title="Standard story flow" steps={["Story", "Customer benefit", "Brand proof point"]} variant="steps" />
    </Grid>
  </Grid>
);

const DigitalGuidance = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Tone rules", body: "Warm, clear, and value-led language.", icon: CampaignIcon },
      { title: "Templates", body: "Posts, emails, banners, and reusable layouts.", icon: MenuBookIcon },
      { title: "Accessibility", body: "Contrast checks and alt-text compliance.", icon: AccessibilityNewIcon },
      { title: "Photo guidance", body: "Real food, real people, natural light.", icon: PhotoCameraIcon }
    ].map((item) => (
      <Grid item xs={12} md={6} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const SocialContentDashboard = () => (
  <Grid container spacing={3} sx={{ mb: 3 }}>
    <Grid item xs={12} md={6}>
      <InfographicPanel title="Content pillars">
        <Grid container spacing={2}>
          {[
            { title: "Value meals + bundles", icon: SavingsIcon },
            { title: "Supplier storytelling", icon: LocalDiningIcon },
            { title: "Seasonal menu drops", icon: SpaIcon },
            { title: "Staff and culture", icon: PeopleAltIcon },
            { title: "Sustainability proof", icon: EmojiNatureIcon }
          ].map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <item.icon fontSize="small" color="action" />
                <Typography variant="body2">{item.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </InfographicPanel>
    </Grid>
    <Grid item xs={12} md={6}>
      <InfographicPanel title="Weekly cadence">
        <BarChart
          xAxis={[{ scaleType: "band", data: ["Posts", "Stories", "Short-form"] }]}
          series={[{ data: [4, 10, 1], color: "#2E5F4D" }]}
          height={220}
        />
        <Typography variant="caption" color="text.secondary">
          Target 8–12 stories per week, with a single hero video.
        </Typography>
      </InfographicPanel>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <KPIStatCard label="Engagement rate" value="+18%" progress={68} />
        </Grid>
        <Grid item xs={12} md={4}>
          <KPIStatCard label="Booking clicks" value="+12%" progress={55} />
        </Grid>
        <Grid item xs={12} md={4}>
          <KPIStatCard label="Review growth" value="+20%" progress={62} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const LoyaltyConcept = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Rewards every visit", body: "Everyday ethical dining earns points fast.", icon: RedeemIcon },
      { title: "Early offers", body: "Members see seasonal drops first.", icon: AccessTimeIcon },
      { title: "Local specials", body: "Exclusive supplier collaborations.", icon: LocalOfferIcon }
    ].map((item) => (
      <Grid item xs={12} md={4} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const DataInsights = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    <Grid item xs={12} md={6}>
      <InfographicPanel title="Collected data">
        <List dense>
          {[
            "Visit frequency",
            "Spend level",
            "Location preference",
            "Dietary preferences",
            "Satisfaction ratings"
          ].map((item) => (
            <ListItem key={item} disableGutters>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </InfographicPanel>
    </Grid>
    <Grid item xs={12} md={6}>
      <InfographicPanel title="Use cases">
        <Grid container spacing={2}>
          {[
            { title: "Tailored offers", icon: LoyaltyIcon },
            { title: "Menu optimisation", icon: AutoGraphIcon },
            { title: "Site benchmarking", icon: VerifiedUserIcon }
          ].map((item) => (
            <Grid item xs={12} key={item.title}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <item.icon fontSize="small" color="action" />
                <Typography variant="body2">{item.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </InfographicPanel>
    </Grid>
  </Grid>
);

const SegmentOffers = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Families", body: "Weekend bundles and shareable plates.", icon: FamilyRestroomIcon },
      { title: "Workers", body: "Fast-value lunch deals.", icon: WorkIcon },
      { title: "Ethical diners", body: "Supplier menu drops and provenance perks.", icon: EmojiNatureIcon }
    ].map((item) => (
      <Grid item xs={12} md={4} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const ExperientialInitiatives = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Supplier tasting nights", body: "Meet makers and sample hero dishes.", icon: LocalDiningIcon },
      { title: "Local harvest weekends", body: "Seasonal menus and market-style activations.", icon: ParkIcon },
      { title: "Community partnerships", body: "Schools, charities, and local fundraising.", icon: VolunteerActivismIcon }
    ].map((item) => (
      <Grid item xs={12} md={4} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const SupplierTactics = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "QR supplier profiles", body: "Instant provenance stories at tables.", icon: QrCode2Icon },
      { title: "Supplier video reels", body: "Short-form social features.", icon: VideocamIcon },
      { title: "Supplier of the month", body: "Celebrate seasonal partners.", icon: EmojiEventsIcon },
      { title: "Menu supplier cards", body: "Print highlights on menus.", icon: MenuBookIcon }
    ].map((item) => (
      <Grid item xs={12} md={6} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const TrainingModules = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Brand promise", body: "How we show up every day.", icon: BrandingWatermarkIcon },
      { title: "Service behaviours", body: "Hospitality and pace standards.", icon: RoomServiceIcon },
      { title: "Sustainability knowledge", body: "Proof points and supplier facts.", icon: EmojiNatureIcon },
      { title: "Complaint handling", body: "Resolve issues with empathy.", icon: SupportAgentIcon },
      { title: "Ethical upselling", body: "Bundles + seasonal recs.", icon: AddShoppingCartIcon }
    ].map((item) => (
      <Grid item xs={12} md={6} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const InternalCommsPlan = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Monthly brand toolkit", body: "Fresh templates and campaign packs.", icon: CalendarMonthIcon },
      { title: "Manager briefings", body: "Site leads align on priorities.", icon: ForumIcon },
      { title: "Staff updates", body: "Internal comms channel refreshes.", icon: CampaignIcon }
    ].map((item) => (
      <Grid item xs={12} md={4} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const ImplementationPhases = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Phase 1", body: "Brand strategy + identity", icon: AutoGraphIcon },
      { title: "Phase 2", body: "Menu + pricing messaging rollout", icon: MenuBookIcon },
      { title: "Phase 3", body: "Loyalty + CRM launch", icon: LoyaltyIcon },
      { title: "Phase 4", body: "Optimisation and campaigns", icon: TrendingUpIcon }
    ].map((item) => (
      <Grid item xs={12} md={3} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const ImpactOutcomes = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Higher visit frequency", body: "Loyalty drives repeat dining.", icon: AutoGraphIcon },
      { title: "Improved conversion", body: "Sharper messaging lifts bookings.", icon: TouchAppIcon },
      { title: "Higher spend", body: "Bundles + seasonal upsell.", icon: SavingsIcon }
    ].map((item) => (
      <Grid item xs={12} md={4} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
    <Grid item xs={12}>
      <LineChart
        xAxis={[{ scaleType: "point", data: ["Baseline", "Month 3", "Month 6", "Month 12"] }]}
        series={[{ data: [40, 52, 64, 78], color: "#4B8B5E" }]}
        height={220}
      />
    </Grid>
  </Grid>
);

const ComplianceChecks = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Evidence for claims", body: "Proof points documented and approved.", icon: FactCheckIcon },
      { title: "Supplier audits", body: "Up-to-date partner compliance.", icon: AssignmentTurnedInIcon },
      { title: "Staff training", body: "Teams certified on sustainability.", icon: SchoolIcon },
      { title: "Compliance documentation", body: "Records stored for audits.", icon: DescriptionIcon }
    ].map((item) => (
      <Grid item xs={12} md={6} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const FeedbackTools = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "QR surveys", body: "Instant post-visit feedback.", icon: QrCode2Icon },
      { title: "Google review prompts", body: "Drive public ratings.", icon: RateReviewIcon },
      { title: "Social listening", body: "Track sentiment and trends.", icon: HearingIcon },
      { title: "Mystery diners", body: "Real-world quality checks.", icon: PersonSearchIcon }
    ].map((item) => (
      <Grid item xs={12} md={6} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const RebrandingSupports = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[
      { title: "Market differentiation", body: "Stand out in ethical dining.", icon: StarBorderIcon },
      { title: "Customer trust", body: "Proof-based, transparent messaging.", icon: VerifiedUserIcon },
      { title: "Operational standardisation", body: "Consistent delivery across sites.", icon: SettingsSuggestIcon },
      { title: "Financial recovery", body: "Stronger margins and repeat visits.", icon: CurrencyPoundIcon },
      { title: "Sustainable growth", body: "Long-term impact with local partners.", icon: ForestIcon }
    ].map((item) => (
      <Grid item xs={12} md={4} key={item.title}>
        <IconCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const AppendixPage = () => {
  const { id } = useParams();
  const appendixId = Number(id);
  const { data, loading } = useAppendixData(appendixId);
  const { setHeadingIds } = useLayout();

  const headingIds = useMemo(() => data?.sections?.map((section) => ({ id: section.id, title: section.title })) || [], [data]);

  useEffect(() => {
    setHeadingIds(headingIds);
    return () => setHeadingIds([]);
  }, [headingIds, setHeadingIds]);

  useEffect(() => {
    if (!headingIds.length) return undefined;
    const elements = headingIds
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headingIds]);

  if (loading) {
    return (
      <Box>
        <Skeleton variant="text" height={60} />
        <Skeleton variant="rectangular" height={160} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={320} />
      </Box>
    );
  }

  if (!data) {
    return <Typography>Appendix not found.</Typography>;
  }

  const showPersonalityTabs = data.id === 6;
  const showObjectives = data.id === 7;
  const showCanvas = data.id === 5;
  const showPositioning = data.id === 8;
  const showLogoAccordion = data.id === 10;
  const showSustainabilityAccordion = data.id === 13;
  const showPricingFAQ = data.id === 14;
  const showKpiDashboard = data.id === 34;
  const showRoadmap = data.id === 31;
  const showBudget = data.id === 32;
  const showBrandValues = data.id === 5;
  const showTonePillars = data.id === 6;
  const showPrinciples = data.id === 9;
  const showPalette = data.id === 11;
  const showLogoGallery = data.id === 10;
  const showGovernanceSteps = data.id === 15;
  const showRiskCards = data.id === 33;
  const showScenarioCards = data.id === 36;
  const showMessagingPyramid = data.id === 13;
  const showStorytellingFramework = data.id === 16;
  const showDigitalGuidance = data.id === 17;
  const showSocialContent = data.id === 18;
  const showLoyaltyConcept = data.id === 21;
  const showDataInsights = data.id === 23;
  const showSegmentOffers = data.id === 24;
  const showExperientialInitiatives = data.id === 25;
  const showSupplierTactics = data.id === 26;
  const showTrainingModules = data.id === 27;
  const showInternalComms = data.id === 28;
  const showImplementationPhases = data.id === 30;
  const showImpactOutcomes = data.id === 35;
  const showComplianceChecks = data.id === 37;
  const showFeedbackTools = data.id === 38;
  const showRebrandingSupports = data.id === 40;

  const tabs = showPersonalityTabs
    ? [
        { label: "Personality", content: "Personality sliders and emotional positioning." },
        { label: "Voice Pillars", content: data.tonePillars.join(", ") },
        { label: "Do & Don’t", content: `DO: ${data.copyRules.do.join(", ")}. DON’T: ${data.copyRules.dont.join(", ")}.` },
        { label: "Examples", content: data.examples.join(" ") }
      ]
    : [];

  const accordionItems = showLogoAccordion
    ? data.rules.map((rule, index) => ({ title: `Rule ${index + 1}`, body: rule }))
    : showSustainabilityAccordion
    ? data.rules.map((rule, index) => ({ title: `Rule ${index + 1}`, body: rule }))
    : showPricingFAQ
    ? data.faq.map((item) => ({ title: item.q, body: item.a }))
    : [];

  return (
    <Box>
      <PageHeader
        title={`Appendix ${data.id}: ${data.title}`}
        goal={data.goal}
        breadcrumbs={[{ label: "Appendices", href: "/section/strategy" }]}
        related={data.related}
        lastUpdated={data.lastUpdated}
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {showCanvas && <ValueCanvas canvas={data.canvas} />}
          {showMessagingPyramid && <MessagingPyramid />}
          {showStorytellingFramework && <StorytellingFramework />}
          {showDigitalGuidance && <DigitalGuidance />}
          {showSocialContent && <SocialContentDashboard />}
          {showLoyaltyConcept && <LoyaltyConcept />}
          {showDataInsights && <DataInsights />}
          {showSegmentOffers && <SegmentOffers />}
          {showExperientialInitiatives && <ExperientialInitiatives />}
          {showSupplierTactics && <SupplierTactics />}
          {showTrainingModules && <TrainingModules />}
          {showInternalComms && <InternalCommsPlan />}
          {showImplementationPhases && <ImplementationPhases />}
          {showImpactOutcomes && <ImpactOutcomes />}
          {showComplianceChecks && <ComplianceChecks />}
          {showFeedbackTools && <FeedbackTools />}
          {showRebrandingSupports && <RebrandingSupports />}
          {showBrandValues && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                { title: "Accessible Ethics", body: "Sustainability that feels realistic and affordable." },
                { title: "Local First", body: "Celebrate West Midlands suppliers and seasonal produce." },
                { title: "Honest Food", body: "Transparent ingredients and reliable recipes." },
                { title: "Care for People", body: "Inclusive dining with warm hospitality." },
                { title: "Responsible Impact", body: "Reduce waste and communicate proof points." },
                { title: "Consistency & Accountability", body: "Standards held across all six sites." }
              ].map((value) => (
                <Grid item xs={12} md={6} key={value.title}>
                  <SectionCard title={value.title}>
                    <Typography variant="body2" color="text.secondary">
                      {value.body}
                    </Typography>
                  </SectionCard>
                </Grid>
              ))}
            </Grid>
          )}
          {showPrinciples && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {data.principles.map((principle) => (
                <Grid item xs={12} md={6} key={principle}>
                  <SectionCard title={principle}>
                    <Typography variant="body2" color="text.secondary">
                      Apply this principle to layouts, photography, and signage choices.
                    </Typography>
                  </SectionCard>
                </Grid>
              ))}
            </Grid>
          )}
          {showPersonalityTabs && (
            <Box sx={{ mb: 3 }}>
              <ComparisonTabs tabs={tabs} />
              <Box sx={{ mt: 3 }}>
                <PersonalitySliders personality={data.personality} />
              </Box>
              <Box sx={{ mt: 3 }}>
                <CopyBlock text="Ethical food, everyday prices." />
              </Box>
              {showTonePillars && (
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  {data.tonePillars.map((pillar) => (
                    <Grid item xs={12} md={6} key={pillar}>
                      <SectionCard title={pillar}>
                        <Typography variant="body2" color="text.secondary">
                          Apply this pillar to menu copy, social captions, and in-store messaging.
                        </Typography>
                      </SectionCard>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          )}
          {showObjectives && <ObjectivesDashboard objectives={data.objectives} />}
          {showPositioning && <PositioningMap positioning={data.positioning} />}
          {showPalette && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {data.palette.map((color) => (
                <Grid item xs={12} md={4} key={color.name}>
                  <Card variant="outlined" sx={{ p: 2 }}>
                    <Box sx={{ height: 64, borderRadius: 2, backgroundColor: color.hex, mb: 1 }} />
                    <Typography variant="subtitle2">{color.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {color.hex}
                    </Typography>
                  </Card>
                </Grid>
              ))}
              <Grid item xs={12}>
                <SectionCard title="Typography preview">
                  <Typography variant="h2">Modern farmhouse meets high-street casual</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Friendly sans for everyday guidance, optional serif for supplier storytelling.
                  </Typography>
                </SectionCard>
              </Grid>
            </Grid>
          )}
          {showLogoGallery && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} md={6}>
                <SectionCard title="Do">
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemText primary="Use approved full-colour or mono assets." />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText primary="Maintain clear space around the mark." />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText primary="Use solid backgrounds or soft overlays." />
                    </ListItem>
                  </List>
                </SectionCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <SectionCard title="Don’t">
                  <List dense>
                    {data.dont.map((item) => (
                      <ListItem key={item} disableGutters>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </SectionCard>
              </Grid>
            </Grid>
          )}
          {showRoadmap && <RoadmapTimeline />}
          {showBudget && <BudgetCharts budget={data.budget} />}
          {showKpiDashboard && <KPIBoard />}
          {showGovernanceSteps && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                "Central team issues toolkit",
                "Local team drafts request",
                "Approval + compliance check",
                "Schedule + performance review"
              ].map((step, index) => (
                <Grid item xs={12} md={6} key={step}>
                  <SectionCard title={`Step ${index + 1}`}>
                    <Typography variant="body2" color="text.secondary">
                      {step}
                    </Typography>
                  </SectionCard>
                </Grid>
              ))}
            </Grid>
          )}
          {showRiskCards && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                { title: "Greenwashing perceptions", body: "Use proof points and supplier data in every claim." },
                { title: "Inconsistent execution", body: "Enforce central governance and template adoption." },
                { title: "Staff resistance", body: "Launch training modules and feedback loops." },
                { title: "Cost pressure", body: "Phase rollouts with quarterly budget reviews." }
              ].map((risk) => (
                <Grid item xs={12} md={6} key={risk.title}>
                  <SectionCard title={risk.title}>
                    <Typography variant="body2" color="text.secondary">
                      {risk.body}
                    </Typography>
                  </SectionCard>
                </Grid>
              ))}
            </Grid>
          )}
          {showScenarioCards && (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                { title: "Competitor discounts", body: "Strengthen value bundles and highlight savings." },
                { title: "Competitor ethical claims", body: "Lead with proof-based comms and supplier stories." },
                { title: "Menu imitation", body: "Accelerate seasonal innovation and local hero drops." }
              ].map((scenario) => (
                <Grid item xs={12} md={4} key={scenario.title}>
                  <SectionCard title={scenario.title}>
                    <Typography variant="body2" color="text.secondary">
                      {scenario.body}
                    </Typography>
                  </SectionCard>
                </Grid>
              ))}
            </Grid>
          )}

          {data.sections.map((section) => {
            const flowData = getFlowData(section);
            return (
              <Box key={section.id} sx={{ mt: 4 }}>
                <SectionHeading id={section.id} title={section.title} />
                {flowData && (
                  <FlowDiagram
                    title={flowData.variant === "cycle" ? "Continuous improvement cycle" : "Step-by-step journey"}
                    steps={flowData.steps}
                    variant={flowData.variant}
                  />
                )}
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {Array.isArray(section.body) ? section.body.join(" ") : section.body}
                </Typography>
                {section.tags && <TagChips tags={section.tags} />}
              </Box>
            );
          })}

          {accordionItems.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <SectionHeading id="guidelines" title="Guidelines" />
              <GuidelineAccordion items={accordionItems} />
            </Box>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <DownloadPanel downloads={data.downloads} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppendixPage;
