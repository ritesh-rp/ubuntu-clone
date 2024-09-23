import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    name : "Additional Drivers",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/16-16.png"
},
{
    name : "Calender",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-06.png"
},
{
    name : "Cheese",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-09.png"
},
{
    name : "Clocks",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-17.png"
},
{
    name : "Files",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-37.png"
},
{
    name : "Htop",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-47.png"
},
{
    name : "Language Support",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-50.png"
},
{
    name : "LibreOffice Calc",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-54.png"
},
{
    name : "LibreOffice Draw",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-56.png"
},
{
    name : "LibreOffice Writer",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/19-03.png"
},
{
    name : "LivePatch",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/19-05.png"
},
{
    name : "LibreOffice Impress",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/19-00.png"
},
{
    name : "OpenJDK Java 8 Policy Tool",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/19-23.png"
},
{
    name : "Postman",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/26-00.png"
},
{
    name : "Power Statistics",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/23-26.png"
},
{
    name : "Remmina Remote Desktop",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/23-33.png"
},
{
    name : "Rythmbox Music Player",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/23-36.png"
},
{
    name : "Settings",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/23-39.png"
},
{
    name : "Shotwell Photo Manager",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/23-42.png"
},
{
    name : "Software & Updates",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/24-16.png"
},
{
    name : "Sudoku",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/24-00.png"
},
{
    name : "System Monitor",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/18-47.png"
},
{
    name : "Terminal",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/26-01.png"
},
{
    name : "Text Editor",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/24-02.png"
},
{
    name : "Thunderbird Mail",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/24-04.png"
},
{
    name : "Ubuntu Software",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/23-51.png"
},
{
    name : "Videos",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/24-31.png"
},
{
    name : "Vim",
    title: "SoftWare and Updates",
    isOpen : false,
    icon : "/app/24-35.png"
},
]

const softwareSlice = createSlice({
    name: "softwares",
    initialState,
    reducers:{
        toggleSoftware:(state,action)=>{
            console.log(state,11111111111111111,action)
        },
        randomizer:(state, action)=>{
            state.sort( () => Math.random() - 0.5);
        }

    }
}
)

export const {toggleSoftware,randomizer} = softwareSlice.actions;
export default softwareSlice.reducer;