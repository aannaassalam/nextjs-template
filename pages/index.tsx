import { demo } from "@/json/mock/demo.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import RightArrowIcon from "@/ui/Icons/RightArrowIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Wrapper>
      <div>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
          officiis?
        </Typography>
        <Typography variant="h1">Hello</Typography>
        <CustomButtonPrimary
          variant="contained"
          color="primary"
          endIcon={<RightArrowIcon />}
        >
          <Typography>Hello</Typography>
        </CustomButtonPrimary>
        <CustomButtonPrimary variant="contained" color="success">
          <Typography>Hello</Typography>
        </CustomButtonPrimary>
        <CustomButtonPrimary variant="contained" color="secondary">
          <Typography>Hello</Typography>
        </CustomButtonPrimary>
        <CustomButtonPrimary variant="contained" color="primary">
          <Typography>Hello</Typography>
        </CustomButtonPrimary>
        <CustomButtonPrimary variant="contained" color="primary">
          <Typography>Hello</Typography>
        </CustomButtonPrimary>
        <CustomButtonPrimary variant="contained" color="primary">
          <Typography>Hello</Typography>
        </CustomButtonPrimary>
        <List>
          {demo?.map((item) => (
            <ListItem>{item?.name}</ListItem>
          ))}
        </List>
      </div>
    </Wrapper>
  );
}
