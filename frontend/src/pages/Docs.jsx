import { Fragment, useState } from 'react'
import '../styles/docs.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Docs(){


    const [selected, setSelected] = useState('about')

    return(
        <div className="docs page-layout">
            <h1>Documentation</h1>
            <span className="selector">
                <p className={`p-light ${selected === 'about' ? 'selected' :''}`}
                    onClick={() => setSelected('about')}
                >about
                </p>
                <p className={`p-light ${selected === 'installation' ? 'selected' :''}`}
                    onClick={() => setSelected('installation')}
                >installation
                </p>
                <p className={`p-light ${selected === 'usage' ? 'selected' :''}`}
                    onClick={() => setSelected('usage')}
                >usage
                </p>
            </span>
            <motion.div className="body"
                initial={{ y: '75vh' }}
                animate={{ y: 0, transition: { duration: 1, ease: 'easeOut' }}}
                exit={{y: '75vh', transition: { duration: 0.5, ease: 'easeOut' }}}
            >
                <span>docs {">"}&nbsp;
                    <AnimatePresence mode="wait">
                        <motion.span
                        key={selected}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        {selected}
                        </motion.span>
                    </AnimatePresence>
                </span>
                <AnimatePresence mode='wait'>
                    <motion.div className='content'
                        key={selected}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                    {selected === 'about' ? 
                        <>
                            <h2>About This Project</h2>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on.</p>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on. </p>
                            <h2>About This Project</h2>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on.</p>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on. </p>
                            <h2>About This Project</h2>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on.</p>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on. </p>
                        </>
                    : selected === 'installation' ?
                        <>
                            <h2>How to Install</h2>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on.</p>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on. </p>
                        </>
                    : 
                        <>
                            <h2>Usage</h2>
                            <div className='break' />
                            <h3>Option 1 - Library Installed</h3>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on.</p>
                            <h3>Option 2 - JSX Components</h3>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on.</p>
                            <h3>Option 3 - Raw SVG Files</h3>
                            <p>Here we have about 2 paragraphs that tell all out this project, why it was created, and the goals it helps to achieve. The second paragraph should list off some different ways to use this project. Should also include that each of the UI elements and icons were created by Donovan Heynen and are open source for any users who wish to use them. A link to a Figma project should be included that has each of the icons and UI elements used, I think that would be the best open source platform to share them on. </p>
                        </>
                    }
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    )
}