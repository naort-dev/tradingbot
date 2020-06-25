import React from 'react'
import { CSSProperties } from 'styled-components'


export interface ExternalLinkProps {
  href: string;
  target?: '_blank' | '_self';
  className?: string;
  style?: CSSProperties;
}

export const ExternalLink: React.FC<ExternalLinkProps> = props => {
  const { children, ...rest } = props
  return <a {...rest} rel="noopener">{children}</a>
}

ExternalLink.defaultProps = {
  target: '_blank'
}