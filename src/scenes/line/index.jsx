import {Box} from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box
      m={"20px"}
      p={"5px"}
      sx={{
        maxHeight: "calc(100% - 100px)",
        overflowX: "auto"
      }}>
      <Header title={"LINE CHART"} subtitle={"Simple Line Chart"} />
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
