/* eslint-disable react/jsx-no-undef */
/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import assest from "@/json/assest";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CloseIconModal from "@/ui/Icons/CloseIconModal";
import { Autocomplete, AutocompleteRenderGroupParams, Button, CircularProgress, Menu, MenuItem } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// eslint-disable-next-line import/no-cycle
import { ContactBody, contactUs } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { IOptions } from "pages";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  isSearchShow?: boolean;
  processed_organization: any[];
  sectors: string[];
}

const drawerWidth = 240;

// export const sectors = [
//   // "Communication Services",
//   // "Consumer Discretionary",
//   "Information Technology",
//   "Consumer Non-Durables",
//   // "Energy",
//   // "Financials",
//   // "Health Care",
//   "Industrials",
//   "Materials",
//   "Real Estate",
//   // "Utilities",
//   // "Government",
//   // "NonProfit",
//   "Manufacturing"
// ];

const schema = yup.object().shape({
  full_name: yup.string().required("Name is required!"),
  email: yup.string().email().required("Email is required!"),
  phone: yup.string().min(7).max(20).required("Phone is required!"),
  message: yup.string().required("Message is required"),
}).required()

export default function Header(props: Props) {

  const [details, setdetails] = React.useState(false);

  const { toastSuccess } = useNotiStack()

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const { isLoading, mutate } = useMutation(contactUs)

  const sessionModalOpen = () => {
    setdetails(true);
  };

  const closeSession = () => {
    setdetails(false);
  };

  const onSubmit = (data: ContactBody) => {
    mutate(data, {
      onSuccess: () => {
        toastSuccess("We will contact you soon!");
        setdetails(false);
        reset({
          full_name: "",
          email: "",
          phone: null,
          message: ""
        })
      }
    })
  }
  const navItems = [
    {
      name: "About",
      route: "/about-us"
    }
  ];

  const { processed_organization, sectors } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [search, setSearch] = React.useState("")
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };



  // const handleLogout = () => {
  //   dispatch(logout());
  //   router.push("/login");
  // };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | any) => {
    setAnchorEl(event!.currentTarget);
    // router.push("/sector")
  };

  const handleClose = () => {
    setAnchorEl(null);
    // router.push(`/sector/${encodeURIComponent(sector)}`);
  };


  // const handleOnChange = (event: any, newValue: number) => {
  //   setValue(newValue);
  //   const selectedOrgSector = sectors[newValue];
  //   setSectorName(selectedOrgSector)
  //   console.log("sct",newValue)
  // };

  const [mobileSearch, setmobileSearch] = React.useState(false);
  const handleOpenSearch = () => {
    setmobileSearch(true);
  };

  const handleCloseSearch = () => {
    setmobileSearch(false);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }} className="wrapper_drawer">
      <Button type="button" className="clodeMenu_btn" onClick={handleDrawerClose}>
        <CloseIconModal />
      </Button>
      <Link href="/" className="headerLogoDrawer">
        <Image
          src={assest.header_logo}
          width={250}
          height={38}
          alt="Logo"
        />
      </Link>
      <List disablePadding className="navList">
        <ListItem disablePadding>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="dropdown-icon"
          // onMouseOver={handleClick}
          // onMouseOut={handleClose}
          >
            Sector
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
            className="filter-menu"
          >
            <MenuItem onClick={() => { router.push("/sector") }}>
              All Sectors
            </MenuItem>
            {sectors?.map((sector) => (
              <MenuItem key={sector} onClick={() => { handleClose(); router.push(`/sector/${sector.replace(" ", "+")}`, undefined, { shallow: true }) }}>
                {sector}
              </MenuItem>
            ))}
          </Menu>
        </ListItem>
        <ListItem disablePadding>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}

          >
            Solutions
          </Button>
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu> */}
        </ListItem>
        <ListItem disablePadding>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={() => router.push('/resources')}
          >
            Resources
          </Button>
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu> */}
        </ListItem>
        {navItems.map((item) => (
          <ListItem disablePadding className="navItems">
            <Link
              href={item?.route}
              key={item?.route}
              className={router.pathname === item.route ? "active" : ""}
            >
              {/* <CustomButton type="button" variant="text"> */}
              {item?.name}
              {/* </CustomButton> */}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"

      >
        <Container fixed className="custom_container">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none", xs: "flex" } }}
              className="OpenMenuBtns"
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="headerLogo">
              <Image
                src={assest.header_logo}
                width={250}
                height={38}
                alt="Logo"
              />
            </Link>
            {props?.isSearchShow &&
              (
                <Box className="headerSearch_wrap">
                  <Autocomplete
                    options={processed_organization?.sort((a: IOptions, b: IOptions) => a.sector.localeCompare(b.sector)) || []}
                    groupBy={(option: IOptions) => option.sector}
                    getOptionLabel={(option: IOptions) => `${option.name} ${option.sector}`}
                    // inputValue={search}

                    renderGroup={(params: AutocompleteRenderGroupParams) => (
                      <Box component='li' key={params.key}>
                        <Link href={`/sector/${params.group.replace(" ", "+")}`} shallow onClick={() => setSearch(params.group)} style={{ textDecoration: "none", color: "#999", padding: "10px 20px", display: 'block', width: '100%', fontWeight: '500', textTransform: 'capitalize' }}>{params.group}</Link>
                        {params.children}
                      </Box>
                    )}
                    renderOption={(props, option: IOptions) => (
                      <Box component='li' {...props} key={option.name}>
                        <Link href={`/company/${option.name.replace(" ", "+")}`} shallow onClick={() => setSearch(option.name)} style={{ textDecoration: "none", color: "#333", display: 'block', width: '100%', paddingInline: "20px", textTransform: 'capitalize' }}>{option.name}</Link>
                      </Box>
                    )}
                    disableClearable
                    noOptionsText="No Companies or Sectors found!"
                    renderInput={(params) => <InputFieldCommon placeholder="Search" {...params} value={search} onChange={e => setSearch(e.target.value)} />}
                  />

                  <i>
                    <Image
                      src={assest.header_searchIcons}
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </i>
                  <Button type="button" className="btnSrchTop" onClick={handleOpenSearch}>
                    <Image
                      src={assest.header_searchIcons}
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </Button>
                </Box>
              )
            }

            <List disablePadding className="navList deskTop_view">
              <ListItem disablePadding>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="dropdown-icon"
                // onMouseOver={handleClick}
                >
                  Sector
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                >
                  <MenuItem onClick={() => { router.push("/sector"); handleDrawerClose() }}>
                    All Sectors
                  </MenuItem>
                  {sectors?.map((sector, index) => (
                    <MenuItem key={sector} onClick={handleDrawerClose}>
                      {sector}
                    </MenuItem>
                  ))}
                </Menu>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={() => router.push("/coming-soon")}
                >
                  Solutions
                </Button>
                {/* <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleDrawerClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                >
                  <MenuItem onClick={handleDrawerClose}>Option 1</MenuItem>
                  <MenuItem onClick={handleDrawerClose}>Option 2</MenuItem>
                  <MenuItem onClick={handleDrawerClose}>Option 3</MenuItem>
                </Menu> */}
              </ListItem>
              <ListItem disablePadding>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={() => router.push("/resources")}
                >
                  Resources
                </Button>
                {/* <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleDrawerClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                >
                  <MenuItem onClick={handleDrawerClose}>Option 1</MenuItem>
                  <MenuItem onClick={handleDrawerClose}>Option 2</MenuItem>
                  <MenuItem onClick={handleDrawerClose}>Option 3</MenuItem>
                </Menu> */}
              </ListItem>
              {navItems.map((item) => (
                <ListItem disablePadding className="navItems">
                  <Link
                    href={item?.route}
                    key={item?.route}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    {/* <CustomButton type="button" variant="text"> */}
                    {item?.name}
                    {/* </CustomButton> */}
                  </Link>
                </ListItem>
              ))}
            </List>

            <Box className={props?.isSearchShow ? "hdr_rgt" : "hdr_rgt hdr_rgt_active"}>
              <CustomButtonPrimary
                type="button"
                variant="contained"
                color="primary"
                onClick={sessionModalOpen}
              >
                <Typography variant="caption">Contact us</Typography>
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          className="wrapper_drawerMain"
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      <Box className={mobileSearch === true ? "searchHomeTop active" : "searchHomeTop"}>
        <Autocomplete
          options={processed_organization?.sort((a: IOptions, b: IOptions) => a.sector.localeCompare(b.sector)) || []}
          getOptionLabel={(option: IOptions) => `${option.name} ${option.sector}`}
          inputValue={search}
          onInputChange={(event, newInputValue) => {
            setSearch(newInputValue);
          }}
          renderGroup={(params: AutocompleteRenderGroupParams) => (
            <Box component='li' key={params.key}>
              <Link href={`/sector/${params.group.replace(" ", "+")}`} shallow onClick={() => setSearch(params.group)} style={{ textDecoration: "none", color: "#999", padding: "10px 20px", display: 'block', width: '100%', fontWeight: '500', textTransform: 'capitalize' }}>{params.group}</Link>
              {params.children}
            </Box>
          )}
          renderOption={(props, option: IOptions) => (
            <Box component='li' {...props} key={option.name}>
              <Link href={`/company/${option.name.replace(" ", "+")}`} shallow onClick={() => setSearch(option.name)} style={{ textDecoration: "none", color: "#333", display: 'block', width: '100%', paddingInline: "20px", textTransform: 'capitalize' }}>{option.name}</Link>
            </Box>
          )}
          disableClearable
          noOptionsText="No Companies or Sectors found!"
          renderInput={(params) => <InputFieldCommon placeholder="Search" {...params} />}
        />
        <Button type="button" className="closeBtn_wraps" onClick={handleCloseSearch}><CloseIconModal IconWidth="15px" IconHeight="15px" /></Button>
      </Box>

      <MuiModalWrapper open={details}
        onClose={closeSession}
        title="">
        <Box className="main_formModals">
          <Typography variant='h2'>Contact Us</Typography>
          <Box className="wrapper_allForm">
            <Box className="aSingle_inputs">
              <InputFieldCommon placeholder='Full name' {...register("full_name")} error={Boolean(errors.full_name)} helperText={errors.full_name?.message as string} />
            </Box>
            <Box className="aSingle_inputs">
              <InputFieldCommon placeholder='Email address' {...register("email")} error={Boolean(errors.email)} helperText={errors.email?.message as string} />
            </Box>
            <Box className="aSingle_inputs">
              <InputFieldCommon placeholder='Phone number' type="number" inputMode="numeric" {...register("phone")} error={Boolean(errors.phone)} helperText={errors.phone?.message as string} />
            </Box>
            <Box className="aSingle_inputs">
              <InputFieldCommon placeholder='Message' multiline {...register("message")} error={Boolean(errors.message)} helperText={errors.message?.message as string} />
            </Box>
            <Box className="btnWrap">
              <CustomButtonPrimary variant='contained' color='primary' type="button" onClick={handleSubmit(data => onSubmit(data as ContactBody))} disabled={isLoading}>
                {
                  isLoading ? <Stack alignItems="center" justifyContent="center" sx={{ color: "rgb(39, 30, 60)" }}><CircularProgress size={15} color="inherit" /></Stack> : <Typography variant='caption'>Submit</Typography>
                }
              </CustomButtonPrimary>
            </Box>
          </Box>
        </Box>
      </MuiModalWrapper>
    </HeaderWrap >
  );
}
