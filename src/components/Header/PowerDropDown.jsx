import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ToggleButton from '../utilities/ToggleButton';

// icons
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosPower } from "react-icons/io";
import { PiNetworkFill } from "react-icons/pi";
import { MdBrightnessMedium } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineAccessibilityNew } from "react-icons/md";

export default function PowerDropDown() {
    return (

        <>
            <Menu as="button" className="relative inline-block text-left">
                <div>
                    <MenuButton className="text-white flex items-center">
                        <MdOutlineAccessibilityNew />&nbsp;
                        <GoTriangleDown />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="p-4">
                        <MenuItem >
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>High contrast</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Zoom</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Large Text</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Screen reader</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Screen Keyboard</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Visual Alert</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Sticky Keys</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Slow Keys</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Bounce Keys</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='grid grid-cols-4 p-1 '>
                                <div className='col-span-3 '>Mouse Keys</div>
                                <div className='col-span-1'><ToggleButton /></div>
                            </div>
                        </MenuItem>

                        
                    </div>
                </MenuItems>
            </Menu>










            <Menu as="button" className="relative inline-block text-left">
                <div>
                    <MenuButton className="text-white flex items-center">
                        <MdBrightnessMedium />&nbsp;&nbsp;
                        <PiNetworkFill />&nbsp;&nbsp;
                        <HiSpeakerWave />&nbsp;&nbsp;
                        <IoIosPower />&nbsp;
                        <GoTriangleDown />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Account settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Support
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                License
                            </a>
                        </MenuItem>
                        <form action="#" method="POST">
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                    Sign out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Menu>

        </>

    )
}
