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
import { Button } from '../ui/button'
import Image from 'next/image'
import { urlQuery } from '@/lib/url'
import { usePathname, useRouter } from 'next/navigation'
import { Separator } from '../ui/separator'
import Text from './Text'

function DropMenu({ frameworks, label, icon, placeholder, noDataMessage }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const pathName = usePathname()
  const router = useRouter()

 
  useEffect(() => {
    const queryString = urlQuery('vechile', value)
    const updatedUrl = `${pathName}${queryString ? `?${queryString}` : ''}`
    router.replace(updatedUrl, { scroll: true })
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          role='combobox'
          aria-expanded={open}
          // className="fixed bottom-2 left-2 rounded-full size-12"
          className='fixed  md:bottom-4 left-14 md:left-4 flex size-12 flex-col items-center  justify-center  gap-2 rounded-full border-2  bg-secondary  font-tajwal font-semibold'
        >
          <div className='flex items-center flex-col gap-1  '>
            <div>{icon}</div>
            <div className='text-right'>
              {/* {value
                ? frameworks?.find(framework => framework?.value === value)
                    ?.label
                : label} */}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
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
export default DropMenu
