'use client';
import DialogBox from '@/components/shared/DialogBox';
import Text from '@/components/shared/Text';
import { Button } from '@/components/ui/button';
import { Check, CircleAlert } from '@/lib/icons';
import React, { useState } from 'react';


export function MoreInfo({ description, subPoints, title }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant='ghost'
                className='absolute -left-[16px] -top-[16px] flex items-start justify-start rounded-bl-none rounded-br-none rounded-tr-none p-2'
                onClick={() => {
                    setOpen(true);
                }}
            >
                <CircleAlert className='text-primary/50' size={18} />
            </Button>
            <DialogBox
                open={open}
                setOpen={setOpen}
                Title={title}
                Description={description}
            >
                <ul className='flex gap-2 flex-col w-full'>
                    {subPoints.map((service, idx) => (
                        <li key={idx} className='flex items-center gap-2 w-full'>
                            <Check size={18} />  <Text>{service}</Text>
                        </li>
                    ))}
                </ul>
            </DialogBox>
        </>
    );
}
