import { Plugin } from '@ckeditor/ckeditor5-core';
import Clipboard from '@ckeditor/ckeditor5-clipboard';
import { Undo } from '@ckeditor/ckeditor5-undo';
import ImageUtils from "./imageutils";

export default class AutoImage extends Plugin {
    static readonly requires: [typeof ImageUtils, typeof Clipboard.Clipboard, typeof Undo];
    static readonly pluginName: 'AutoImage';
    init(): void;
}
