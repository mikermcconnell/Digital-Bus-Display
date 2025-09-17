// Barrie Transit bus route data organized by terminal location
export const busRoutes = {
  downtown: {
    13: [
      { route: "101", destination: "Blue", color: "#4FC3F7" },  // Lighter blue for contrast
      { route: "12B", destination: "Park Place", color: "#C2185B" }  // Darker pink/magenta
    ],
    14: [
      { route: "100", destination: "Red", color: "#8B0000" },  // Darker red for better contrast
      { route: "12A", destination: "Georgian Mall", color: "#C2185B" }  // Darker pink/magenta
    ]
  },
  allandale: {
    1: [
      { route: "1", destination: "Toronto Southbound", color: "#4CAF50" }
    ],
    2: [
      { route: "2", destination: "Wasaga Beach", color: "#FFD700" }
    ],
    3: [
      { route: "8B", destination: "Essa Southbound", color: "#000000" }
    ],
    4: [
      { route: "8B", destination: "Essa Southbound", color: "#000000" }
    ],
    5: [
      { route: "8A", destination: "RVH Southbound", color: "#000000" }
    ],
    6: [
      { route: "3", destination: "Ontario Northland", color: "#FFD700" }
    ],
    7: [
      { route: "7B", destination: "Bear Creek", color: "#FF8C00" }
    ],
    8: [
      { route: "7A", destination: "Grove", color: "#FF8C00" }
    ],
    9: [
      { route: "C", destination: "Bus 7608", color: "#DC143C" },
      { route: "D", destination: "Train 647", color: "#4CAF50" }
    ],
    10: [],
    11: [],
    12: [
      { route: "8B", destination: "Crosstown Northbound", color: "#000000" }
    ],
    13: [
      { route: "12A", destination: "Georgian Mall", color: "#C2185B" }
    ],
    14: [
      { route: "8A", destination: "Yonge Southbound", color: "#000000" },
      { route: "12B", destination: "Barrie South GO", color: "#C2185B" },
      { route: "4E", destination: "East Aurora", color: "#4CAF50" }
    ]
  }
};

export default busRoutes;