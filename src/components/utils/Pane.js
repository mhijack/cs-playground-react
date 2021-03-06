// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';

type Props = {
  className: string,
  theme: string,
  leftWidth: string,
  rightWidth: string,
  children: React.Node
}

const Pane = ({
  children,
  className,
  leftWidth,
  rightWidth,
  theme
}: Props) => (
  <main
    className={className.includes('left-pane')
      ? `${className} ${theme}`
      : className }
    style={{ width: className.includes('left-pane')
      ? leftWidth
      : rightWidth }}>
    { children }
  </main>
)

Pane.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  leftWidth: PropTypes.string.isRequired,
  rightWidth: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

const mapStateToProps = ({ panes, theme }) => ({
  leftWidth: panes.leftWidth,
  rightWidth: panes.rightWidth,
  theme: theme.current
})

export default connect(mapStateToProps)(Pane)
