AFRAME.registerComponent('isvr-vr-mode', {

    schema: {
        camera_distance_vr: {type: 'number', default: 1.0}
    },

    init: function() {

        var self = this;
        this.el.addEventListener('enter-vr', function() {

            document.querySelector('#floor').setAttribute('visible', true);

            var scale = document.querySelector('#model-wrapper').dataset.vrscale;
            document.querySelector('#model-wrapper').setAttribute('scale', AFRAME.utils.coordinates.parse(scale));

            var model_y_axis = document.querySelector('#model-wrapper').getAttribute('data-vr-model-y-axis');
            document.querySelector('#model-wrapper').setAttribute('position', { x:0, y:model_y_axis, z:0 });


            var camera_wrapper = document.querySelector('#camera-wrapper');
            /* store original position for exit-vr event */
            self.camera_wrapper_pos = camera_wrapper.getAttribute('position');
            camera_wrapper.setAttribute('position', { x: 0, y: 0, z: self.data.camera_distance_vr });

        });

        this.el.addEventListener('exit-vr', function() {

            //document.querySelector('#floor').setAttribute('visible', false);

            //document.querySelector('#model-wrapper').setAttribute('scale', { x: 1, y: 1, z: 1 });

            //document.querySelector('#model-wrapper').setAttribute('position', { x: 0, y: 0, z: 0 });

            /* restore orig value */ 
            //document.querySelector('#camera-wrapper').setAttribute('position', { x: 0, y: self.camera_wrapper_pos.y, z: self.camera_wrapper_pos.z });

            location.reload();

        });

    },

});


