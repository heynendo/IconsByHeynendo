import Badge from "./Badge"
import Table1 from "./Table1"
import RotateFunctionality from './RotateFunctionality'
import InputWithDropdown from './InputWithDropdown'
import InputWithColorPicker from './InputWithColorPicker'
import { useState } from 'react'
import '../styles/icon-info.css'
import {AnimatePresence, motion} from "framer-motion"

export default function IconInfo({selectedIcon, setSelectedIcon}){
    const [degrees, setDegrees] = useState(0)
    const [size, setSize] = useState(100)
    const [color, setColor] = useState('#000000')
    const [rotation, setRotation] = useState(0)

    const sizeOptions = Array.from({ length: 29 }, (_, i) => 10 + i * 5);


    function resetSettings() {
        setSize(100)
        setColor('#000000')
        setRotation(0)
    }

    const defaultSettings = (size === 100 && color === '#000000' && rotation === 0) ? true : false

    return(
        <div className="icon-info">
            <div className='head'>
                <div className='exit-icon' onClick={() => setSelectedIcon(null)}/>
                <div className='container'>
                    <span className='icon-name'>{selectedIcon?.name}</span>
                    {/**badges of icon name metadata */}
                    <Badge selected='true'>magnify</Badge>
                </div>
            </div>
            <div className='icon-settings'>
                <div className="icon-display">
                    <selectedIcon.Component
                        color={color} 
                        size = {150}
                        rotation={rotation}
                    />
                </div>
                <div className="container">
                    <Table1>
                        <Table1.Row label="Color">
                            <InputWithColorPicker 
                                color={color}
                                setColor={setColor}
                            />
                        </Table1.Row>
                        
                        <Table1.Row label="Size">
                            <InputWithDropdown 
                                options={sizeOptions}
                                inputValue={size}
                                setInputValue={setSize}
                            />
                        </Table1.Row>
                        
                        <Table1.Row label="Rotate">
                            <RotateFunctionality 
                                degrees={rotation} 
                                onRotate={setRotation} 
                            />
                        </Table1.Row>
                    </Table1>
                    <AnimatePresence>
                        {!defaultSettings &&
                        <motion.p 
                            className="reset" 
                            onClick={() => resetSettings()}
                            initial={{ y: 10}}
                            animate={{ y: 0}}
                            exit={{ y: 10}}
                            transition={{duration: 0.2, delay: 0.2}}
                        >
                            reset options
                        </motion.p>
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div className='icon-code'>
                <div className='options'>
                    <div className='left'>
                        <p>Code</p>
                        <Badge selected='true'>SVG</Badge>
                        <Badge>JSX</Badge>
                        <Badge>React</Badge>
                    </div>
                    <div className='right'>
                        <Badge>copy</Badge>
                        <Badge>download</Badge>
                    </div>
                </div>
                <div className="code">

                </div>
            </div>
        </div>
    )
}