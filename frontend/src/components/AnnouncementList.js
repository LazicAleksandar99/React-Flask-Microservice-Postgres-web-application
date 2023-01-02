import React from "react";
import AnnouncementCard from "./AnnouncementCard";

const AnnouncementList = ({ announcementsData }) => {
    return (
        <div >
            {announcementsData.map((announcement, index) => {
                console.log('index: ' + index)
                return (
                    <AnnouncementCard
                        key={index}
                        heading={announcement.heading}
                        description={announcement.description}
                        picture={announcement.picture}
                        id = {announcement.announcement_id}
                        left = {index % 2 == 0}
                    />
                );
            })}
        </div>
    );
};

export default AnnouncementList;