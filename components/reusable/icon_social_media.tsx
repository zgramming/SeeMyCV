import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";

const IconSocialMedia = ({
  title,
  visible,
  icon,
  className,
  onClick,
}: {
  title: string;
  visible: boolean;
  icon: IconProp;
  className?: string;
  onClick: () => void;
}) => {
  if (!visible) return null;
  return (
    <Tooltip title={title} className="hover:cursor-pointer">
      <FontAwesomeIcon icon={icon} className={className} onClick={onClick} />
    </Tooltip>
  );
};
export default IconSocialMedia;
