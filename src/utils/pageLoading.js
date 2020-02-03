import TopBarProgress from "react-topbar-progress-indicator";

// Importing the package and setting the colour fade across the load bar.
TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "0.5": "#E1EEFF",
    "1.0": "#3A8FFD"
  },
  shadowBlur: 5
});

export default TopBarProgress;
