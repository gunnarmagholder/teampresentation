import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PersonPresenterWebPartStrings';
import PersonPresenter from './components/PersonPresenter';
import { IPersonPresenterProps } from './components/IPersonPresenterProps';
import { PropertyFieldPeoplePicker, PrincipalType } from '@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker';
import { IPropertyFieldGroupOrPerson } from "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";

export interface IPersonPresenterWebPartProps {
  description: string;
  person: IPropertyFieldGroupOrPerson[];
}

export default class PersonPresenterWebPart extends BaseClientSideWebPart<IPersonPresenterWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPersonPresenterProps > = React.createElement(
      PersonPresenter,
      {
        description: this.properties.description,
        person: this.properties.person
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldPeoplePicker('person', {
                  label: 'PropertyFieldPeoplePicker',
                  initialData: this.properties.person,
                  allowDuplicate: false,
                  principalType: [PrincipalType.Users, PrincipalType.SharePoint, PrincipalType.Security],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  context: this.context,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'peopleFieldId'
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  multiline: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
