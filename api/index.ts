import "dotenv/config";
import server from "./src/app";
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
