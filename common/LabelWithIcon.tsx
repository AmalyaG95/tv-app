import { TLabelWithIcon } from "@/constants/MainMenu.constant";
import Image from "next/image";

type TLabelWithIconProps = TLabelWithIcon & {
  className?: string;
  spacing?: string;
  padding?: string;
  iconStyles?: string;
  showTitle?: boolean;
};

const LabelWithIcon = ({
  icon,
  name,
  spacing = "gap-4 lg:gap-[50px]",
  padding = "p-0",
  iconStyles = "",
  className = "",
  showTitle = true,
}: TLabelWithIconProps) => (
  <span
    className={`flex ${spacing} items-center relative ${padding} transition-all`}
  >
    <Image alt={name} src={icon} priority className={iconStyles} />
    {showTitle && (
      <span
        className={`text-2xl lg:text-[36px] leading-6 lg:leading-[40px] text-white ${className}`}
      >
        {name}
      </span>
    )}
  </span>
);

export default LabelWithIcon;
