import MasterMenu from './_component/MasterMenu'

export default async function providerLayout({
  params,
  children // will be a page or nested layout
}) {
  return (
    <section className='h-scrren mt-6 flex   w-full items-center justify-center'>
      <MasterMenu />
      <div className=' flex h-[80vh] w-full    items-center justify-center rounded-md px-4'>
        {children}
      </div>
    </section>
  )
}
