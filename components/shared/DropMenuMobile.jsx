'use client'
import React, { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import Image from 'next/image'
import { urlQuery } from '@/lib/url'
import { usePathname, useRouter } from 'next/navigation'
import Text from './Text'
import { Car } from '@/lib/icons'

function DropMenuMobile({ frameworks, label, placeholder, noDataMessage }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const pathName = usePathname()
  const router = useRouter()

 
  useEffect(() => {
    const queryString = urlQuery('vechile', value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.replace(updatedUrl, { scroll: true })
    // router.prefetch(updatedUrl)
  }, [value])


  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className='absolute -top-6 left-2 flex items-center justify-start pt-2 bg-secondary rounded-full size-20 p-0 flex-col'>
      <PopoverTrigger asChild>
          <div className='flex items-center   flex-col'>
            <Car size={45} className='text-primary' strokeWidth={1.25} />
            {value
            ? frameworks?.find(framework => framework?.value === value)?.label
            :<Text>{label}</Text> }
            
          </div>
        {/* </Button> */}
      </PopoverTrigger>
        </div>
      <PopoverContent className='w-[250px] p-0'>
        <Command disablePointerSelection>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{noDataMessage}</CommandEmpty>
            <CommandGroup>
              {frameworks?.map(framework => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  <div className='flex w-full items-center justify-between'>
                    <Text fontSize='xs' opacity={'opacity-35'}>
                      {framework.label}
                    </Text>
                    <Image
                      src={framework.logo} // Handle missing logo
                      alt={'car'}
                      width={25}
                      height={25}
                    />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export default DropMenuMobile
