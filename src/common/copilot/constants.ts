/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import vscode from "vscode";


export const CopilotDisclaimer = `Make sure AI-generated content is accurate and appropriate before using. <a href="https://go.microsoft.com/fwlink/?linkid=2240145">Learn more</a> | <a href="https://go.microsoft.com/fwlink/?linkid=2189520">View
terms</a>`;
export const sendIconSvg = ` <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M1.17683 1.1185C1.32953 0.989145 1.54464 0.963297 1.72363 1.05279L14.7236 7.55279C14.893 7.63748 15 7.81061 15 8C15 8.18939 14.893 8.36252 14.7236 8.44721L1.72363 14.9472C1.54464 15.0367 1.32953 15.0109 1.17683 14.8815C1.02414 14.7522 0.96328 14.5442 1.02213 14.353L2.97688 8L1.02213 1.64705C0.96328 1.45578 1.02414 1.24785 1.17683 1.1185ZM3.8693 8.5L2.32155 13.5302L13.382 8L2.32155 2.46979L3.8693 7.5H9.50001C9.77615 7.5 10 7.72386 10 8C10 8.27614 9.77615 8.5 9.50001 8.5H3.8693Z"
  class="send-icon" />
</svg>`;
export const CodiconStylePathSegments = ['src', 'common', 'copilot', 'assets', 'styles', 'codicon.css'];
export const CopilotStylePathSegments = ['src', 'common', 'copilot', 'assets', 'styles', 'copilot.css'];
export const US_GEO = 'us';
export const COPILOT_UNAVAILABLE = 'copilotunavailable';
export const AUTH_CREATE_MESSAGE = vscode.l10n.t('Creating new Auth Profile');
export const AUTH_CREATE_FAILED = vscode.l10n.t("Error creating auth profile for org")
export const PAC_SUCCESS = "Success";
export const RELEVANCY_CHECK_FAILED = 'RelevancyCheckFailed';
export const EXTENSION_ID = 'microsoft-IsvExpTools.powerplatform-vscode';

export type WebViewMessage = {
  type: string;
  value?: string | number | boolean | object;
  envName?: string;
};

export const DataverseEntityNameMap = new Map<string, string>([
  ['webpage', 'adx_webpage'],
  ['list', 'adx_entitylist'],
  ['webtemplate', 'adx_webtemplate'],
  ['basicform', 'adx_entityform'],
  ['advancedformstep', 'adx_entityform'],
]);

export const EntityFieldMap = new Map<string, string>([
  ['custom_javascript', 'adx_customjavascript'],
  ['source', 'adx_source'],
  ['copy', 'adx_copy']
]);

export const FieldTypeMap = new Map<string, string>([
  ['js', 'JavaScript'],
  ['html', 'html']
]);

export const AuthProfileNotFound = [{ displayText: "Active auth profile is not found or has expired. Create an Auth profile to start chatting with Copilot again.", code: '' }];
export const NetworkError = [{ displayText: "There was an issue connecting to the server. Please check your internet connection and try again.", code: '' }];
export const InvalidResponse = [{ displayText: "Something went wrong. Don’t worry, you can try again.", code: '' }];
export const MalaciousScenerioResponse = [{ displayText: "Try a different prompt that’s related to writing code for Power Pages sites. You can get help with HTML, CSS, and JS languages.", code: '' }];