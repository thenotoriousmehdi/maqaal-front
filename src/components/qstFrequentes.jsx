
import DOTSgrid from '../assets/dotsGrid.png'
import React from 'react';
import FadeIn from "./FadeIn"
import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';





const qstFrequentes = () => {

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
 
  const FaqItems = [

    {title : 'question 1 ' , desc : ' answer 1 '} , 
    {title : 'question 2 ' , desc : ' answer 2 '}, 
    
  ];

  return (
    <div className='mt-10  bg-rosee  bg-opacity-6    rounded-tl-3xl rounded-b-3xl'>
         <div className='flex flex-col items-center  my-10'>
         <FadeIn delay={0.2} direction="down" >
              <h1 className=' font-title text-center md:text-5xl text-3xl lg:text-6xl font-extrabold p-4 text-primary my-10'> questions <span className='text-rosee'>fréquentes</span></h1>
         </FadeIn>


            <Accordion.Root className="    w-11/12  md:w-7/12 flex flex-col items-center  " type="single" defaultValue="item-1" collapsible>
                <Accordion.Item className="AccordionItem w-full " value="item-1">
                  <AccordionTrigger className=" my-4 bg-primary w-full      h-16  rounded-b-3xl rounded-tl-3xl text-xl font-body  text-white font-semibold">Is it accessible?</AccordionTrigger>
                  <AccordionContent className=' w-full  pl-5 text-xl font-body  text-primary font-semibold '>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem w-full " value="item-2">
                  <AccordionTrigger className=" w-full   my-4 bg-primary  h-16  rounded-b-3xl rounded-tl-3xl text-xl font-body  text-white font-semibold" >Is it unstyled?</AccordionTrigger>
                  <AccordionContent  className=' w-full  pl-5   text-xl font-body  text-primary font-semibold '>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem w-full " value="item-3">
                  <AccordionTrigger className=" w-full my-4 bg-primary  h-16  rounded-b-3xl rounded-tl-3xl text-xl font-body  text-white font-semibold">Can it be animated?</AccordionTrigger>
                  <Accordion.Content  className=' w-full   pl-5  text-xl font-body  text-primary font-semibold AccordionContent'>
                    <div className="AccordionContentText">
                      Yes! You can animate the Accordion with CSS or JavaScript.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem w-full " value="item-4">
                  <AccordionTrigger className=" w-full   my-4 bg-primary  h-16  rounded-b-3xl rounded-tl-3xl text-xl font-body  text-white font-semibold" >Is it unstyled?</AccordionTrigger>
                  <AccordionContent  className=' w-full  pl-5   text-xl font-body  text-primary font-semibold '>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem w-full " value="item-5">
                  <AccordionTrigger className=" w-full   my-4 bg-primary  h-16  rounded-b-3xl rounded-tl-3xl text-xl font-body  text-white font-semibold" >Is it unstyled?</AccordionTrigger>
                  <AccordionContent  className=' w-full  pl-5   text-xl font-body  text-primary font-semibold '>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                  </AccordionContent>
                </Accordion.Item>
              </Accordion.Root>
  
        </div>
     
      <div className='relative  right-0 left-auto hidden lg:block  pb-3'> <img src={DOTSgrid} alt="dots grid " /> </div>
    </div>
  )
}
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className=" flex">
    <Accordion.Trigger
      className={classNames('flex  items-center justify-between  px-4 AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
export default qstFrequentes