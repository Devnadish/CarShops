import { toast } from "sonner"
export const Notify=(msg,type,lable="نجاح",duration=5000,)=>{
toast[type](lable, {
  description:msg ,
  duration: duration,
})
}

