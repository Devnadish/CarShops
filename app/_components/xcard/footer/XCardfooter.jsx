import CardActionButton from "./CardActionButton";

export const XCardfooter = ({id}) => {
  return (
    <div className="flex items-center justify-center w-full rounded-md">
      <CardActionButton providerId={id} />
    </div>
  ) 
};
