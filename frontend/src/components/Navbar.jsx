/* 📂 Location: src/components/Navbar.jsx */
import React, { useState } from 'react';
import { 
    InputBase, Button, Menu, MenuItem, IconButton, 
    Drawer, List, ListItem, ListItemText, Typography, 
    Accordion, AccordionSummary, AccordionDetails 
} from '@mui/material';
import { 
    Search as SearchIcon, 
    Menu as MenuIcon, 
    KeyboardArrowDown, 
    ExpandMore as ExpandMoreIcon 
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);
    const toggleDrawer = () => setMobileOpen(!mobileOpen);

    // Standardized Categories (Your provided list)
    const categories = [
        "Fashion & Apparel", 
        "Electronics & Gadgets", 
        "Food & Dining ", 
        "Travel & Hotels", 
        "Beauty & Cosmetics", 
        "Home & Furniture", 
        "Gifts & Others", 
        "UPI & Recharge"
    ];

    // ✅ ক্যাটাগরি ক্লিক লজিক আপডেট করা হয়েছে
    const handleCategoryClick = (category) => {
        handleCloseMenu();
        
        // যদি "Fashion & Apparel" হয় তবে /fashion এ যাবে
        if (category === "Fashion & Apparel") {
            navigate("/fashion");
        } else {
            // অন্য ক্যাটাগরির জন্য ডিফল্ট স্লাগ লজিক (যা আগে ছিল)
            navigate(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`);
        }
    };

    return (
        <nav className="navbar-container">
            <div className="nav-wrapper">
                <Link to="/" className="logo-section" style={{ textDecoration: 'none', color: '#272aceff' }}>
                    Offer<span style={{ color: '#ff9800' }}>Dukan</span>
                </Link>

                <div className="search-section" style={{ position: 'relative', background: '#f1f3f6', borderRadius: '5px', padding: '2px 10px' }}>
                    <InputBase 
                        placeholder="Search Brands/Coupons..." 
                        fullWidth 
                        startAdornment={<SearchIcon style={{ marginRight: '8px', color: '#888' }} />} 
                    />
                </div>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stores">Stores</Link></li>
                    <li onClick={handleOpenMenu} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
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
                    <Button variant="contained" color="primary" size="small" onClick={() => navigate('/signin')}>Sign In</Button>
                    <IconButton className="mobile-menu-btn" onClick={toggleDrawer} sx={{ display: { lg: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
                <List style={{ width: '280px' }}>
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
                    <ListItem button component={Link} to="/contact" onClick={toggleDrawer}><ListItemText primary="Contact Us" /></ListItem>
                </List>
            </Drawer>
        </nav>
    );
};

export default Navbar;