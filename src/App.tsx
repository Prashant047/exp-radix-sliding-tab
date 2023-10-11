import * as Tabs from '@radix-ui/react-tabs';
import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import tabData from './tabData';
 
 
export default function App() {

  const [activeTab, setActiveTab] = useState('0');
  const [tuple, setTuple] = useState(['-1', activeTab]);

  if(tuple[1] != activeTab){
    setTuple([tuple[1], activeTab]);
  }

  let prev = tuple[0];
  let direction = parseInt(activeTab) > parseInt(prev) ? "right" : "left";

  return (
    <div className='max-w-md my-10 mx-auto'>
      <div className='overflow-hidden'>
        <Tabs.Root value={activeTab} onValueChange={(tab) => setActiveTab(tab)}> 
          <Tabs.List className=' border-b border-neutral-700'>
            {tabData.map((tab, index) => (
              <TabsTrigger value={index.toString()} key={index}>
                {tab.title}
              </TabsTrigger>
            ))}
          </Tabs.List>
          <div className='relative h-[200px]'>
            <AnimatePresence custom={direction}>
              <TabsContent value={activeTab} key={activeTab} direction={direction}>
                {tabData[parseInt(activeTab)].content}
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}

function TabsTrigger({
  children,
  value
}:{
  children: ReactNode,
  value: string
}){
  return (
    <Tabs.Trigger
      value={value}
      className={
        `group relative text-xs text-neutral-400 px-3 py-4
        hover:text-neutral-200
        data-[state=active]:text-neutral-200
        `
      }
    >
      <span>{ children }</span>
      <div className='group-data-[state=active]:block hidden absolute bottom-0 left-0 w-full rounded-t-md h-[1.5px] bg-neutral-200'/>
    </Tabs.Trigger>
  )
}

function TabsContent({
  children,
  value,
  direction
}:{
  children: ReactNode,
  value: string,
  direction: string
}){

  let variants = {
    initial: (direction:string) => ({x : direction === "right"?'100%':'-100%'}),
    animate:{x: 0},
    exit: (direction:string) => ({x : direction === "right"?'-100%':'100%'})
  }

  return (
    <Tabs.Content 
      className='py-4'
      value={value}
      asChild
      forceMount
    >
      <motion.div
        className='absolute'
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={direction}
        transition={{
          ease:"easeInOut",
          // ease: [0.32, 0.72, 0, 1],
          duration: 0.4
        }}
      >
        { children }
      </motion.div>
    </Tabs.Content>
  )
}
