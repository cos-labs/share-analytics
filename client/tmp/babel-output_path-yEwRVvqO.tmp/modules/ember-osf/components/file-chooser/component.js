import Ember from 'ember';
import layout from './template';

/**
 * @module ember-osf
 * @submodule components
 */

/**
 * This component lets the user choose a list of files from their computer, by
 * drag-and-drop, a file browser, or whatever method the developer wants.
 *
 * Exposed to parent context (bindable attributes)
 *  - `files`: mutable list of chosen File objects
 *  - `multiple`: boolean (default `true`), when `false`, only keeps the most
 *          recently chosen File in the list
 *  - `onChoose`: callback function called each time a file is added, with the
 *          new File object as the only argument
 *
 * Exposed to block context
 *  - `this`: the component object itself, so the block can invoke actions
 *      example:
 *      ```handlebars
 *          {{#file-chooser files=fileList as |component|}}
 *              {{input type='file'
 *                  change=(action 'onFileInputChange' target=component)}}
 *          {{/file-chooser}}
 *      ```
 *
 * Actions
 *  - `onFileInputChange`: handle the `change` event on a file input
 *  - `onChooseFile`: add a file to the chosen list
 *
 * Styling
 *  - This component's element has the `drop-zone` class
 *  - While the user is holding dragged files over this component, it
 *    has the `drop-zone-ready` class
 *
 * @class file-chooser component
 */
export default Ember.Component.extend({
    layout: layout,
    classNames: ['drop-zone'],
    classNameBindings: ['dropZoneReady'],
    dropZoneReady: false,
    multiple: true,

    dragOver: function dragOver(event) {
        if (event.dataTransfer.types.indexOf('Files') > -1) {
            this.set('dropZoneReady', true);
            event.dataTransfer.dropEffect = 'move';
            return false;
        } else {
            event.dataTransfer.dropEffect = 'none';
        }
    },

    dragLeave: function dragLeave(event) {
        this.set('dropZoneReady', false);
        event.dataTransfer.dropEffect = '';
    },

    drop: function drop(event) {
        event.preventDefault();
        this.set('dropZoneReady', false);
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            var file = event.dataTransfer.files[i];
            this._chooseIfFile(file);
        }
    },

    actions: {
        onFileInputChange: function onFileInputChange(event) {
            for (var i = 0; i < event.target.files.length; i++) {
                var file = event.target.files[i];
                this.send('onChooseFile', file);
            }
        },

        onChooseFile: function onChooseFile(file) {
            var files = this.get('files');
            if (typeof files === 'undefined') {
                this.set('files', Ember.A());
                files = this.get('files');
            }
            if (this.get('multiple')) {
                files.pushObject(file);
            } else {
                this.set('files', Ember.A([file]));
            }

            var callback = this.get('onChoose');
            if (callback) {
                callback(file);
            }
        }
    },

    _chooseIfFile: function _chooseIfFile(file) {
        var _this = this;

        // HACK: There's not a cross-browser way to see the contents of
        // dragged-and-dropped directories, but there's also not a good way to
        // tell whether a given File object is a directory. Hence, this:
        var p = new Ember.RSVP.Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                return resolve();
            }; // it's a file
            reader.onerror = function () {
                return reject();
            }; // it's a directory or something
            reader.readAsText(file.slice(0, 5));
        });
        p.then(function () {
            return _this.send('onChooseFile', file);
        });
        p['catch'](function () {
            return _this.set('errorMessage', 'Cannot upload directories (' + file.name + ')');
        });
    }
});