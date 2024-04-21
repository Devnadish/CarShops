'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import Spinner from './Spinner'
import { Notify } from '@/lib/notify'
import { useEffect } from 'react'

function Submit({
  title = 'حفظ',
  w = 'w-6/12',
  color = 'bg-primary',
  icon = <Send size={18} />,
  textColor = 'text-primary-foreground',
  isDisabled = false,
  notifyMsg,
  ...props
}) {
  const status = useFormStatus()

  useEffect(() => {
    if (status.pending && notifyMsg) {
      Notify(notifyMsg, 'success', 'تم')
    }
  }, [status.pending])

  return (
    <>
      <Button
        disabled={status.pending || isDisabled}
        className={`${w} flex items-center justify-center gap-4  font-tajwal font-bold   ${textColor}  ${color}`}
        // onClick={() => handleDone(status.pending)}
      >
        {status.pending ? (
          <div
            className={`flex items-center justify-center gap-2 ${textColor}`}
          >
            <span>جاري الحفظ..</span>
            <Spinner />
          </div>
        ) : (
          <div className='flex items-center justify-center gap-2 '>
            <span>{title}</span>
            {icon}
          </div>
        )}
      </Button>
      {/* {status.pending && Notify('result.msg', 'success', 'تم')} */}
    </>
  )
}

export default Submit
