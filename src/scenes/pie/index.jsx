import {Box} from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box
      m={"20px"}
      p={"5px"}
      sx={{
        maxHeight: "calc(100% - 100px)",
        overflowX: "auto"
      }}>
      <Header title={"PIE CHART"} subtitle={"Simple Pie Chart"} />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
