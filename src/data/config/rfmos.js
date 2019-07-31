module.exports = {
  async get() {
    return [
      {
        "id": "ICCAT",
        "label": "ICCAT",
        "alias": [
          "CICAA",
          "CICTA",
          "International Commission for the Conservation of Atlantic Tunas",
          "Comisión Internacional para la Conservación del Atún Atlántico",
          "Commission internationale pour la conservation des thonidés de l’Atlantique"
        ],
        "bounds": [[86.1509, -98.0859], [-82.9834, 68.2031]]
      },
      {
        "id": "IOTC",
        "label": "IOTC",
        "alias": ["CTOI", "Indian Ocean Tuna Commission", "Commission des Thons de l’Océan Indien"],
        "bounds": [[30.6001, 19.8633], [-54.7753, 149.7656]]
      },
      {
        "id": "WCPFC",
        "label": "WCPFC",
        "alias": "Western & Central Pacific Fisheries Commission",
        "bounds": [[85.2152, 99.0967], [-60.0648, -129.7266]]
      },
      {
        "id": "IATTC",
        "label": "IATTC",
        "alias": [
          "CIAT",
          "AIDCP",
          "IDCP",
          "Inter-American Tropical Tuna Commission",
          "Comisión Interamericana del Atún Tropical",
          "International Dolphin Conservation Program"
        ],
        "bounds": [[50.0642, -150.1172], [-50.2893, -71.7188]]
      },
      {
        "id": "CCSBT",
        "label": "CCSBT",
        "alias": "Commission for the Conservation of Southern Bluefin Tuna",
        "bounds": [[-30.1451, -20.3906], [-50.0642, 184.5703]]
      }
    ]
  },
};
