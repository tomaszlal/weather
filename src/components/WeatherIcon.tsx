import * as React from 'react';
import { WeatherIconNameMap } from '../types/IconTypes';

interface Props {
  weatherCode: number;
  className?: string;
}

export default class WeatherIcon extends React.Component<Props> {
  private src: string;

  constructor(props: Props) {
    super(props);
    this.src = WeatherIconNameMap[this.props.weatherCode]
  }

  public render() {
    return (
      <img
        className={this.props.className || "size-10"}
        src={`/assets/${this.src}`}
        alt="wheater icon"
      />
    );
  }
}
