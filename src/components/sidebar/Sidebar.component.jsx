import React, { useState, useEffect } from 'react';

import db from '../../firestore/firbase-utils';

import './Sidebar.styles.scss';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import SidebarOption from '../sidebar-option/Sidebar-option.component';
import { useStateValue } from '../../state/state-provider';

const options = [
  {
    icon: InsertCommentIcon,
    title: 'Threads',
  },
  { icon: InboxIcon, title: 'Mentions & Reactions' },
  { icon: DraftsIcon, title: 'Saved Items' },
  { icon: BookmarkBorderIcon, title: 'Channel Browser' },
  { icon: PeopleAltIcon, title: 'People & User Groups' },
  { icon: AppsIcon, title: 'Apps' },
  { icon: FileCopyIcon, title: 'File Browser' },
  { icon: ExpandLessIcon, title: 'Show Less' },
];

function Sidebar() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //run this code once when the sidebar loads

    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top_info">
          <div className="sidebar__top_info_workspace">
            <span>Abandoned in London</span>
            <CreateIcon />
          </div>

          <div className="sidebar__top_info_userstatus">
            <FiberManualRecordIcon />
            <span>{currentUser?.userName}</span>
          </div>
        </div>
      </div>

      {/* sidebar areas */}
      <div className="sidebar__areas">
        {options.map(({ icon, title }, index) => (
          <SidebarOption key={index} title={title} Icon={icon} />
        ))}
      </div>

      {/* list of channels */}
      <div className="sidebar__channels_list">
        <hr />
        <SidebarOption title="Channels" Icon={ExpandMoreIcon} />
        <hr />

        {channels.map((channel) => (
          <SidebarOption
            title={channel.name}
            key={channel.id}
            id={channel.id}
          />
        ))}

        <SidebarOption
          title="Add Chanel"
          Icon={AddIcon}
          addChannelOption={true}
        />
      </div>
    </div>
  );
}

export default Sidebar;
