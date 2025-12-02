import * as React from 'react';

interface Props {
  src: string;
  className?: string;
}

export default class SvgIcon extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <img
        className={this.props.className || "size-6"}
        src={`/assets/${this.props.src}.svg`}
        alt="wheater svg icon"
      />
    );
  }
}
