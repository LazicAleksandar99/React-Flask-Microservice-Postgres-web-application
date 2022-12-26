import React from 'react';

const AnnouncementCard= ({ heading, description, picture, left }) =>{

  return (
    <div>
        <div className="row featurette">
            <div className={ left ? "col-md-7 order-md-2" : "col-md-7"}>
                <h2 className="featurette-heading fw-normal lh-1">{heading}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={left ? "col-md-5 order-md-1": "col-md-5"}>
            {/* <img 
              src="https://res.cloudinary.com/dfms5eutq/image/upload/v1671932374/adfj2ppy7ied6xdtnhnc.png" 
              className="featurette-image img-fluid mx-auto" 
              alt="Responsive image" 
              style={{width: '500',height: '500', preserveAspectRatio: 'xMidYMid slice', focusable: "false"}}

              /> */}

                <img className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto"src={picture} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            </div>
        </div>

        <hr className="featurette-divider"/>
    </div>
  );
}
export default AnnouncementCard;