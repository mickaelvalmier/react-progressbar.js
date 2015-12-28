module.exports = function(grunt)
{
    grunt.initConfig({
        'pkg' : grunt.file.readJSON('package.json'),
        'babel' : {
            'options' : {
                'sourceMap' : false,
                'presets' : ['es2015', 'react', 'stage-0']
            },
            'default' : {
                'files' : {
                    'dist/main.js': 'src/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel']);
};