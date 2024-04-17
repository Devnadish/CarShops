export const urlQuery=(Qname,value)=>{

  const params = new URLSearchParams(window.location.search);
  if(value){
    params.set(Qname, value);
  }else{
    params.delete(Qname)
  }
  const queryString = params.toString();
  return queryString
}


 