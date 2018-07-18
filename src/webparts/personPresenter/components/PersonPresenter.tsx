import * as React from 'react';
import styles from './PersonPresenter.module.scss';
import { IPersonPresenterProps } from './IPersonPresenterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PropertyFieldPeoplePicker, PrincipalType } from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';

export default class PersonPresenter extends React.Component<IPersonPresenterProps, {}> {
  public render(): React.ReactElement<IPersonPresenterProps> {
    return (
      <div>
        <h1>{this.props.person}</h1>
        <p>{this.props.description}</p> 
      </div>
    );
  }
}
