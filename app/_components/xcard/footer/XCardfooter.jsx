import CardActionButton from './CardActionButton'

export const XCardfooter = ({ id }) => {
  return (
    <div className='flex w-full items-center justify-center rounded-md'>
      <CardActionButton providerId={id} />
    </div>
  )
}
export default XCardfooter
