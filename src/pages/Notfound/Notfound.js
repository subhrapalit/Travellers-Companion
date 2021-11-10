import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img style={{ width: "100%" }} src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
            <Link to='/'> <div className="btn btn-danger mt-2">Want to Go Back?</div> </Link>
        </div>
    );
};

export default Notfound;