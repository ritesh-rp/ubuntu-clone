import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    name : "Additional Drivers",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Calender",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Cheese",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Clocks",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Files",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Htop",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Language Support",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "LibreOffice Calc",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "LibreOffice Draw",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "LibreOffice Writer",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "LivePatch",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Logs",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "OpenJDK Java 8 Policy Tool",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Postman",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Power Statistics",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Remmina Remote Desktop",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Rythmbox Music Player",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Settings",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Shotwell Photo Manager",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Software & Updates",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Sudoku",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "System Monitor",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Terminal",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Text Editor",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Thunderbird Mail",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Ubuntu Software",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Videos",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
{
    name : "Vim",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/chrome.png"
},
]

const softwareSlice = createSlice({
    name: "softwares",
    initialState,
    reducers:{
        toggleSoftware:(state,action)=>{
            console.log(state,11111111111111111,action)
            // state.status = !state.status;
        // },
        // logout:(state)=>{
            // state.status = false,
            // state.userData = null
        }
    }
}
)

export const {toggleSoftware} = softwareSlice.actions;
export default softwareSlice.reducer;