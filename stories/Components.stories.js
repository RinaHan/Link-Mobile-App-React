import React from 'react';
import Settings from '../comps/Settings';
import Profile from '../comps/Profile';


export default {
    title: 'Comp',
    component: Settings,
  };

export const settings = () =><div>
    <Settings />
    </div>

export const profile = () =><div>
<Profile />
</div>