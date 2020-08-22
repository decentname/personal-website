import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faHtml5, faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faHtml5, faPaperPlane, faCss3, faReact);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
