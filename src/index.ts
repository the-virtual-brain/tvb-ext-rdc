import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {ICommandPalette, MainAreaWidget} from '@jupyterlab/apputils';
import {ILauncher} from '@jupyterlab/launcher';
import IframeWidget from "./IframeWidget";

const extension: JupyterFrontEndPlugin<void> = {
    id: 'tvb-ext-rdc:plugin',
    description: 'A JupyterLab extension which wraps a given URL as an env variable.',
    autoStart: true,
    requires: [ICommandPalette, ILauncher],
    activate: (app: JupyterFrontEnd, commandPalette: ICommandPalette, launcher: ILauncher) => {
        const commandId = 'iframe-widget:open';
        app.commands.addCommand(commandId, {
            label: 'Guacamole',
            execute: () => {
                const iframe = new IframeWidget('http://localhost:8080/guacamole/');
                const widget = new MainAreaWidget({content: iframe});
                widget.title.label = 'Guacamole';
                widget.title.closable = true;
                app.shell.add(widget, 'main');
                app.shell.activateById(widget.id);
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
