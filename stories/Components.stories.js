import React from 'react';
import Settings from '../comps/Settings';
import Profile from '../comps/Profile';
import Dating_Profile from '../comps/Dating_Profile';


export default {
    title: 'RinaComponents',
    component: Settings,
  };

export const settings = () =><div>
    <Settings />
    </div>

export const profile = () =><div>
<Profile />
</div>

export const dating_profile = () =><div>
<Dating_Profile />
</div>