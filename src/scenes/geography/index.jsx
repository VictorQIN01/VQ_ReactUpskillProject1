import {Box, useTheme} from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import {tokens} from "../../theme";

const Geography = () => {
  const colors = tokens(useTheme().palette.mode);
  return (
    <Box
      m={"20px"}
      p={"5px"}
      sx={{
        maxHeight: "calc(100% - 100px)",
        overflowX: "auto"
      }}>
      <Header title={"GEOGRAPHY CHART"} subtitle={"Simple Geography Chart"} />
      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
