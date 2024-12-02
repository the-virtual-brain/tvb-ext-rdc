<p>
    <img src="style/VirtualBrainTwin_Logo.svg" alt="VBT logo" title="VBT" height="100" />
</p>

# tvb_ext_rdc

[![Github Actions Status](https://github.com/the-virtual-brain/tvb-ext-rdc/workflows/Build/badge.svg)](https://github.com/the-virtual-brain/tvb-ext-rdc/actions/workflows/build.yml)

A JupyterLab extension to wrap a given URL given as an env parameter.

This extension is composed of a Python package named `tvb_ext_rdc`
for the server extension and a NPM package named `tvb_ext_rdc`
for the frontend extension.

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install tvb_ext_rdc
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall tvb_ext_rdc
```

## Troubleshoot

If you are seeing the frontend extension, but it is not working, check
that the server extension is enabled:

```bash
jupyter server extension list
```

If the server extension is installed and enabled, but you are not seeing
the frontend extension, check the frontend extension is installed:

```bash
jupyter labextension list
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the tvb_ext_rdc directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Server extension must be manually installed in develop mode
jupyter server extension enable tvb_ext_rdc
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
# Server extension must be manually disabled in develop mode
jupyter server extension disable tvb_ext_rdc
pip uninstall tvb_ext_rdc
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `tvb_ext_rdc` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)

##  Acknowledgments

This project has received funding from the European Union’s Research and Innovation Program Horizon Europe under Grant Agreement No. 101137289 (Virtual Brain Twin Project).