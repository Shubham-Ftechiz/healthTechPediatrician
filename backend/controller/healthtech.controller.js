exports.getPediatricianInfo = async (req, res) => {
  const pediatricianData = [
    {
      name: "Blood Sugar",
      measure: "80",
      measureUnit: "mg / dL",
      result: "Normal",
      colour: "#F8DEBD",
    },
    {
      name: "Heart Rate",
      measure: "98",
      measureUnit: "bpm",
      result: "Normal",
      colour: "#FBF0F3",
    },
  ];

  res.send(pediatricianData);
};
