/* 📂 Location: src/components/Navbar.jsx */
import React, { useState } from 'react';
import { 
    InputBase, Button, Menu, MenuItem, IconButton, 
    Drawer, List, ListItem, ListItemText, Typography, 
    Accordion, AccordionSummary, AccordionDetails, Divider, Box
} from '@mui/material';
import { 
    Search as SearchIcon, 
    Menu as MenuIcon, 
    KeyboardArrowDown, 
    ExpandMore as ExpandMoreIcon,
    DarkModeOutlined,
    LightModeOutlined
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); 
    const navigate = useNavigate();

    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);
    const toggleDrawer = () => setMobileOpen(!mobileOpen);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const categories = [
        "Fashion & Apparel", "Electronics & Gadgets", "Food & Dining ", 
        "Travel & Hotels", "Beauty & Cosmetics", "Home & Furniture", 
        "Gifts & Others", "UPI & Recharge"
    ];

    const handleCategoryClick = (category) => {
        handleCloseMenu();
        if (category === "Fashion & Apparel") {
            navigate("/fashion");
        } else {
            navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`);
        }
    };

    return (
        <nav className="navbar-container">
            <div className="nav-wrapper">
                {/* লোগো - এখন পিসি ও মোবাইল উভয় জায়গায় বোল্ড হবে */}
                <Link to="/" className="logo-section">
                    Offer<span>Dukan</span>
                </Link>

                <div className="search-section">
                    <InputBase 
                        placeholder="Search Brands/Coupons..." 
                        fullWidth 
                        startAdornment={<SearchIcon style={{ marginRight: '8px', color: '#888' }} />} 
                    />
                </div>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stores">Stores</Link></li>
                    <li onClick={handleOpenMenu} className="dropdown-link">
                        Categories <KeyboardArrowDown />
                    </li>
                    <li><Link to="/todays-deals">Today's Deal</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>

                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                    {categories.map((cat) => (
                        <MenuItem key={cat} onClick={() => handleCategoryClick(cat)}>{cat}</MenuItem>
                    ))}
                </Menu>

                <div className="auth-section">
                    {/* PC ভিউ: সাইন ইন ও থিম আইকন */}
                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: '10px' }}>
                        <Button variant="contained" className="signin-btn-pc" onClick={() => navigate('/signin')}>
                            Sign In
                        </Button>
                        <IconButton onClick={toggleTheme} className="theme-toggle">
                            {isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
                        </IconButton>
                    </Box>

                    {/* মোবাইল ভিউ: শুধু হামবার্গার আইকন */}
                    <IconButton className="mobile-menu-btn" onClick={toggleDrawer} sx={{ display: { lg: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>

            {/* Mobile Drawer (সাইডবার) */}
            <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
                <div className="drawer-header">
                    <Typography variant="h6" className="drawer-logo">
                        Offer<span>Dukan</span>
                    </Typography>
                </div>
                <Divider />
                
                <List style={{ width: '280px' }}>
                    {/* সাইডবারে সাইন ইন এবং থিম আইকন (একসাথে) */}
                    <ListItem className="drawer-auth-row" style={{ padding: '15px', display: 'flex', gap: '10px' }}>
                        <Button 
                            variant="contained" 
                            fullWidth 
                            onClick={() => { navigate('/signin'); toggleDrawer(); }}
                            style={{ background: '#272ace', fontWeight: 'bold', flex: 1 }}
                        >
                            Sign In
                        </Button>
                        <IconButton onClick={toggleTheme} style={{ background: '#f1f3f6', borderRadius: '8px' }}>
                            {isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
                        </IconButton>
                    </ListItem>
                    
                    <Divider />
                    
                    <ListItem button component={Link} to="/" onClick={toggleDrawer}><ListItemText primary="Home" /></ListItem>
                    <ListItem button component={Link} to="/stores" onClick={toggleDrawer}><ListItemText primary="Stores" /></ListItem>
                    
                    <Accordion elevation={0} sx={{ '&:before': { display: 'none' } }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>Categories</Typography></AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 0 0 20px' }}>
                            <List>
                                {categories.map((cat) => (
                                    <ListItem button key={cat} onClick={() => { handleCategoryClick(cat); toggleDrawer(); }}><ListItemText primary={cat} /></ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    
                    <ListItem button component={Link} to="/todays-deals" onClick={toggleDrawer}><ListItemText primary="Today's Deal" /></ListItem>
                    <ListItem button component={Link} to="/blog" onClick={toggleDrawer}><ListItemText primary="Blog" /></ListItem>
                    <ListItem button component={Link} to="/contact-us" onClick={toggleDrawer}><ListItemText primary="Contact Us" /></ListItem>
                </List>
            </Drawer>
        </nav>
    );
};

export default Navbar;