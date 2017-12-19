'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as toarray from './toarray';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {



    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.hexToArray', () => {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        var selection = editor.selection;
        var text = editor.document.getText(selection);

        var result = toarray.HexSeparator(text);
        editor.edit(builder => {
            builder.replace(selection, result);
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

