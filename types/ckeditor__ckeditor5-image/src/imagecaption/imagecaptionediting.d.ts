import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUtils from '../imageutils';

export default class ImageCaptionEditing extends Plugin {
    static readonly pluginName: 'ImageCaptionEditing';
    static readonly requires: [typeof ImageUtils];
    init(): void;
}
