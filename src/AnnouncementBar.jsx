import React from 'react';

const AnnouncementBar = () => {
    // Inline styles to match the dark theme and purple borders
    const barStyle = {
        backgroundColor: '#000', // Black background
        color: '#fff',          // White text
        padding: '10px 0',      // Vertical padding
        textAlign: 'center',
        fontSize: '14px',
        // The original image seems to have the purple borders only at the very top/bottom of the whole screen,
        // but we'll apply them here for simplicity.
    };

    const contentStyle = {
        maxWidth: '1200px', // Max width for content centering (Adjust as needed)
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center', // Center content
        alignItems: 'center',
        gap: '20px', // Space between the message and the dropdown
    };

    const linkStyle = {
        color: '#fff', // White link color
        textDecoration: 'underline',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    const dropdownStyle = {
        // Positioned far to the right in the original layout, but centered here for simplicity
        // In a real application, you'd use a different layout (e.g., flexbox with space-between)
        position: 'absolute', // To place the English dropdown on the far right
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        marginRight: '20px',
    };

    // Style for the container to enable absolute positioning of the dropdown
    const containerStyle = {
        position: 'relative',
    };

    return (
        <div style={{ ...barStyle, ...containerStyle }}>
            <div style={contentStyle}>
                
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery • OFF 50% • 
                    <a href="/shopnow" style={linkStyle}>Shopnow</a>
                </p>

                
                <div style={dropdownStyle}>
                    <select
                        defaultValue="English"
                        style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '5px',
                        }}
                    >
                        <option value="English">English </option>
                        <option value="Bangla">Bangla </option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default AnnouncementBar;