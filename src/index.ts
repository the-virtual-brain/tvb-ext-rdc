import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import IframeWidget from './IframeWidget';
import { requestAPI } from './handler';

export type APIEnv = {
  guacamole: string;
};

const extension: JupyterFrontEndPlugin<void> = {
  id: 'tvb-ext-rdc:plugin',
  description:
    'A JupyterLab extension which wraps a given URL as an env variable.',
  autoStart: true,
  requires: [ICommandPalette, ILauncher],
  activate: (
    app: JupyterFrontEnd,
    commandPalette: ICommandPalette,
    launcher: ILauncher
  ) => {
    const commandId = 'iframe-widget:open';
    app.commands.addCommand(commandId, {
      label: 'Guacamole',
      execute: () => {
        let environmentData: string | undefined = undefined;

        requestAPI<APIEnv>('env_route')
          .then(data => {
            environmentData = data.guacamole;
            const iframe = new IframeWidget(environmentData!);
            const widget = new MainAreaWidget({ content: iframe });
            widget.title.label = 'Guacamole';
            widget.title.closable = true;
            app.shell.add(widget, 'main');
            app.shell.activateById(widget.id);
          })
          .catch(reason => {
            console.error(
              `The name_of_your_extension server extension appears to be missing.\n${reason}`
            );
          });
      }
    });

    commandPalette.addItem({
      command: commandId,
      category: 'Guacamole'
    });
    if (launcher) {
      launcher.add({
        command: commandId,
        category: 'Other',
        rank: 1
      });
    }
  }
};

export default extension;
