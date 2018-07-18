import * as React from 'react';
import styles from './PersonPresenter.module.scss';
import { IPersonPresenterProps } from './IPersonPresenterProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PersonPresenter extends React.Component<IPersonPresenterProps, {}> {
  public render(): React.ReactElement<IPersonPresenterProps> {
    return (
      <div>
        {this.props.description}
      </div>
    );
  }
}
