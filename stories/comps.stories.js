
import React, {UseState} from 'react';
import Header from '../comps/header';
import Input from '../comps/input';
import Questions from '../comps/questions';
import Sliders from '../comps/sliders';
import CustomButton from '../comps/CustomButton';
import { useState } from 'react';

export default {
    title:"comps",
};

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input 
placeholder="custom placeholder"
/>

export const MyQuestions = () => <Questions />;

export const MySliders = () => <Sliders />;

export const MyCustomButton = () => <CustomButton />;

