 import Badge from "./Badge"
import Table1 from "./Table1"
import RotateFunctionality from './RotateFunctionality'
import InputWithDropdown from './InputWithDropdown'
import InputWithColorPicker from './InputWithColorPicker'
import { useState, useEffect } from 'react'
import '../styles/icon-info.css'
import {AnimatePresence, motion} from "framer-motion"
import iconData from '../../../data/icon-data.json'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useAlert } from '../functions/AlertProvider'
import { Copy1, Download1, Exit1 } from "icons-by-heynendo"


export default function IconInfo({selectedIcon, setSelectedIcon}){
    const { showAlert } = useAlert()
    
    const [size, setSize] = useState(100)
    const [color, setColor] = useState('#000000')
    const [rotation, setRotation] = useState(0)

    const [codeOption, setCodeOption] = useState('SVG')
    const [codeContent, setCodeContent] = useState('')

    const sizeOptions = Array.from({ length: 29 }, (_, i) => 10 + i * 5)

    useEffect(() => {
        if (!selectedIcon?.name) {
            setCodeContent('// Select an icon to view code');
            return;
        }

        // Find the icon data
        const iconInfo = iconData.find(i => i.name === selectedIcon.name);
        
        if (!iconInfo) {
            setCodeContent('// Icon data not found');
            return;
        }

        // Set the appropriate code based on selection
        if (codeOption === 'SVG') {
            setCodeContent(iconInfo.svg);
        } else if (codeOption === 'JSX') {
            setCodeContent(iconInfo.jsx);
        } else if (codeOption === 'React') {
            setCodeContent(iconInfo.react);
        }
    }, [selectedIcon, codeOption])


    function resetSettings() {
        setSize(100)
        setColor('#000000')
        setRotation(0)
    }

    function copyCode() {
        navigator.clipboard.writeText(codeContent)
        showAlert("icon copied to clipboard")
    }
    function downloadCode() {
        if (!selectedIcon) return;

        // Decide file extension based on code option
        let extension = 'txt';
        if (codeOption === 'SVG') extension = 'svg';
        if (codeOption === 'JSX' || codeOption === 'React') extension = 'jsx'

        const filename = `${selectedIcon.name}.${extension}`;

        // Create file blob
        const blob = new Blob([codeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Create temporary link and click it
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showAlert("icon downloaded");
    }


    const defaultSettings = (size === 100 && color === '#000000' && rotation === 0) ? true : false

    const iconInfo = selectedIcon ? iconData.find(i => i.name === selectedIcon.name) : null;
    const iconKeywords = iconInfo?.keywords.map((word, index) => (
        <Badge key={index} selected={true}>{word}</Badge>
    )) || null;

    return(
        <div className="icon-info">
            <div className='head'>
                <Exit1 
                    onClick={() => setSelectedIcon(null)}
                    size={25}
                    color="rgb(47, 0, 186)"
                />
                <div className='container'>
                    <span className='icon-name'>{selectedIcon?.name}</span>
                    {/**badges of icon name metadata */}
                    {iconKeywords}
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
                            initial={{ x: 20, opacity: 0}}
                            animate={{ x: 0, opacity: 1}}
                            exit={{ x: 20, opacity: 0}}
                            transition={{duration: 0.2}}
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
                        <Badge selected={codeOption === 'SVG'} onClick={() => setCodeOption('SVG')}>SVG</Badge>
                        <Badge selected={codeOption === 'JSX'} onClick={() => setCodeOption('JSX')}>JSX</Badge>
                        <Badge selected={codeOption === 'React'} onClick={() => setCodeOption('React')}>React</Badge>
                    </div>
                    <div className='right'>
                        <Badge onClick={() => copyCode()}>copy <Copy1 size={10}/></Badge>
                        <Badge onClick={() => downloadCode()}>download <Download1 size={10}/></Badge>
                    </div>
                </div>
                <div className="code">
                    <SyntaxHighlighter 
                        lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                        wrapLines={true} 
                        language={codeOption === 'SVG' ? 'xml' : 'jsx'}
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            minHeight: '250px'
                        }}
                    >
                        {codeContent}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}