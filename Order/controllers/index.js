import axios from "axios";

const catalogControllers = {
  purchaseBook: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ message: "invalid id input" });

      const CatalogPort = process.env.PORT_CATALOG;
      const hostnameWithoutPort =
        req.get("host")?.split(":")?.[0] || "localhost";

      const catalogBaseUrl = `http://${hostnameWithoutPort}:${CatalogPort}/catalog`;

      const { data: result } = await axios.get(catalogBaseUrl + "/info/" + id);

      if (result?.message === "success") {
        if (result.data.quantity) {
          const orderResult = await axios.put(
            catalogBaseUrl + "/purchase/" + id,
          );

          res.status(orderResult.status).json(orderResult.data);
        } else {
          res.status(400).json({ message: "stock is empty" });
        }
      } else {
        return res.status(404).json({ message: "book not found." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default catalogControllers;
